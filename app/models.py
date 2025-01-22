from django.db import models
from django.db import models
from django.contrib.auth.models import User  # To associate with Django's built-in User model
from django.utils import timezone
# Create your models here.
import uuid
from django.db.models import Sum, IntegerField
from django.db.models.functions import Cast
from itertools import chain   
from django.db.models import Sum

from .genUid import *
  
class Account(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]
    
    MARITAL_STATUS_CHOICES = [
        ('single', 'Single'),
        ('married', 'Married'),
        ('divorced', 'Divorced'),
        ('widowed', 'Widowed'),
    ]
    
    ACCOUNT_TYPE_CHOICES = [
        ('savings', 'Savings'),
        ('current', 'Current'),
        ('fixed-deposit', 'Fixed Deposit'),
    ]
    uuid = models.CharField(
        max_length=2000,
           # Makes this the primary key for the model
        default=uuid.uuid4,  # Automatically generates a unique UUID
         # Ensures the value cannot be manually changed
    )
    intertransfer = models.ManyToManyField("intertransferx", blank=True)
    localtransfer = models.ManyToManyField("localtransferx", blank=True)
    Subjecttiketmain = models.ManyToManyField("Subjecttiket", blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    mobile = models.CharField(max_length=15)
    password = models.CharField(max_length=100)  # Store hashed passwords in production!
    occupation = models.CharField(max_length=100, blank=True, null=True)
    Country = models.CharField(max_length=100, blank=True, null=True)
    City = models.CharField(max_length=100, blank=True, null=True)
    Zip = models.CharField(max_length=100, blank=True, null=True)
    Accountnum = models.CharField(max_length=100,default=referCode(11) ,blank=True, null=True)
    balance = models.CharField(max_length=100, default=0, blank=True, null=True)
    pin = models.CharField(max_length=100, default='0000', blank=True, null=True)
    address = models.TextField()    
    marital_status = models.CharField(max_length=10, choices=MARITAL_STATUS_CHOICES)
    type_of_account = models.CharField(max_length=20, choices=ACCOUNT_TYPE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_verified = models.BooleanField(default=False)
    banned = models.BooleanField(default=False)
    profile_picture = models.TextField(  blank=True, null=True)

    def __str__(self):
        return self.username




    def alluser(self):
        return Account.objects.all()
    def allunblck(self):
        return Account.objects.filter(banned=False)
    def alluserblock(self):
        return Account.objects.filter(banned=True)
    def adtiket(self):
        return Subjecttiket.objects.all()
    def adtiketopen(self):
        return Subjecttiket.objects.filter(appoved=False)
    def adtiketdown(self):
        return Subjecttiket.objects.filter(appoved=True)
    def inter(self):
        return intertransferx.objects.all( )
    def local(self):
        return localtransferx.objects.all( )
    def expense(self):
        total_balance = self.intertransfer.aggregate(
            total_balance=Sum(Cast('Amount', IntegerField()))
        )
        return  total_balance['total_balance']   or 0
    def income(self):
        
        total_balance2 = self.localtransfer.aggregate(
            total_balance2=Sum(Cast('Amount', IntegerField()))
        )
        return  total_balance2['total_balance2']  or 0
    def alltor(self):
        combined_queryset2 = localtransferx.objects.all( ).count() +intertransferx.objects.all( ).count()
        
        return combined_queryset2
    def alltoritem(self):
        combined_queryset2 = chain(self.intertransfer.all( )  ,self.localtransfer.all( ) )
        
        return combined_queryset2





TRANSACTION_STATUS_CHOICES = [
    ('pending', 'Pending'),
    ('completed', 'Completed'),
    ('failed', 'Failed'),
    ('reversed', 'Reversed'),
    ('cancelled', 'Cancelled'),
]





class  Subjecttiket(models.Model):
    uuid = models.CharField( max_length=50 ,blank=True, null=True,default=referCode(12))
    Subject = models.CharField( max_length=50 ,blank=True, null=True,)
    Priority = models.CharField( max_length=50 ,blank=True, null=True,default=acc())
    Details = models.CharField( max_length=50 ,blank=True, null=True,)
    created_at = models.DateTimeField( blank=True,default=timezone.now, null=True,)
    updated_at = models.DateTimeField( blank=True,default=timezone.now, null=True,)
    appoved = models.BooleanField(blank=True,default=False)
class  intertransferx(models.Model):
    Amount = models.CharField( max_length=50 ,blank=True, null=True,)
    uuid = models.CharField( max_length=50 ,blank=True, null=True,default=referCode(12))
    accname = models.CharField( max_length=50 ,blank=True, null=True,)
    accnum = models.CharField( max_length=50 ,blank=True, null=True,default=acc())
    bankname = models.CharField( max_length=50 ,blank=True, null=True,)
    swiftcode = models.CharField( max_length=50 ,blank=True, null=True,default=generate_swift_code())
    Bankaddress = models.CharField( max_length=50 ,blank=True, null=True,)
    Description = models.CharField( max_length=900 ,blank=True, null=True,)
    appoved = models.CharField(blank=True, choices=TRANSACTION_STATUS_CHOICES, default="pending", null=True,max_length=50)
    types = models.CharField( max_length=50 , default='Debit',blank=True, null=True,)
    
    date = models.DateTimeField( blank=True,default=timezone.now, null=True,)
    class Meta:
        ordering = ['-date']  
    def save(self, *args, **kwargs):
        # Generate a new UUID if it doesn't exist
        if not self.uuid:
            new_uuid = str(referCode(9))  # Generate a new UUID

            # Check for duplicates
            while intertransferx.objects.filter(uuid=new_uuid).exists():
                new_uuid = str(referCode(9))  # Generate a new UUID until it's unique

            self.uuid = new_uuid
        
        super().save(*args, **kwargs)
    def __str__(self):
        return f'client {str(self.uuid)}'
        
class  localtransferx(models.Model):
    uuid = models.CharField( max_length=50 ,blank=True, null=True,default=referCode(9))
    accname = models.CharField( max_length=50 ,blank=True, null=True,)
    accnum = models.CharField( max_length=50 ,blank=True, null=True,default=acc())
    Amount = models.CharField( max_length=50 ,blank=True, null=True,)
    Description = models.CharField( max_length=50 ,blank=True, null=True,)
    types = models.CharField( max_length=50 ,blank=True, null=True,)
    appoved = models.CharField(blank=True, choices=TRANSACTION_STATUS_CHOICES, default="Pending", null=True,max_length=50)
    Routing = models.CharField( max_length=50 ,blank=True, null=True,)
    date = models.DateTimeField( blank=True, null=True,default=timezone.now)
    class Meta:
        ordering = ['-date'] 
    def save(self, *args, **kwargs):
        # Generate a new UUID if it doesn't exist
        if not self.uuid:
            new_uuid = str(referCode(9))  # Generate a new UUID

            # Check for duplicates
            while localtransferx.objects.filter(uuid=new_uuid).exists():
                new_uuid = str(referCode(9))  # Generate a new UUID until it's unique

            self.uuid = new_uuid
        
        super().save(*args, **kwargs)
    def __str__(self):
        return f'client {str(self.uuid)}'

class siteedit(models.Model):
    name = models.CharField( max_length=50 ,blank=True, null=True,)
    email = models.CharField( max_length=50 ,blank=True, null=True,)
    owneremail = models.CharField( max_length=50 ,blank=True, null=True,)
    host = models.CharField( max_length=50 ,default=name, blank=True, null=True,)
    Address = models.CharField( max_length=50 ,blank=True, null=True,)
    country = models.CharField( max_length=50 ,blank=True, null=True,)
    dis = models.TextField( blank=True, null=True,)
    phone = models.CharField( max_length=50 ,blank=True, null=True,)
    logo = models.TextField( blank=True, null=True,)
    image1 = models.TextField( blank=True, null=True,)
    idx = models.IntegerField( default=1) 
    
    facebooklink = models.CharField( max_length=500 ,blank=True, null=True,)
    twiiterlink = models.CharField( max_length=500 ,blank=True, null=True,)
    instergram = models.CharField( max_length=500 ,blank=True, null=True,)
    youtubelink = models.CharField( max_length=500 ,blank=True, null=True,)
    whatsapplonk = models.CharField( max_length=500 ,blank=True, null=True,)
   
    def __str__(self):
        return self.name