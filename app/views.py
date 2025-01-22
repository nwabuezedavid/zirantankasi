from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import * 
# Create your views here.
from django.shortcuts import render
from django.shortcuts import render,redirect
from app.models import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User  # To associate with Django's built-in User model
from django.db.models import Q
from django.shortcuts import render
from django.http import JsonResponse
from .forms import AccountForm,ProfileForms
from .req import *
from .use import *
# Create your views here.
def home(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }
    return render (request, "home/home.html",con)
def activate(request,pk):
    if Account.objects.filter(uuid=pk).exists():
        Account.objects.filter(uuid=pk).update(is_verified=True)
        messages.success(request, 'Account verified successfully')
    else:
        messages.error(request, 'Account not found')
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }
    return render (request, "home/verified.html",con)
def Commercial(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/commer.html",con)
def bank(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/bank.html",con)
def ServiceFees(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/ServiceFees.html",con)
def sitemap(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/sitemap.html",con)
def branchesatms(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/branches-atms.html",con)
def Calculation(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/Calculation.html",con)
def Contact(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/Contact.html",con)
def iban(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/iban.html",con)
def notice(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/notice.html",con)
def Investor(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/Investor.html",con)
def about(request):
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }   
    return render (request, "home/about.html",con)


def block(request):
    if Account.objects.filter(user=request.user).exists():
        ee = Account.objects.get(user=request.user)
        print('done')
        con ={
                'site':siteedit.objects.get(idx=1),
                'user':ee,
            }
        email_sending(request,'mail/suspension.html',con,"Account Blocked ",ee.email)
    else:
        ee= 'USER'          
    con ={
        # 'user':ee,
        'site':siteedit.objects.get(idx=1)
        
    }    
    return render(request, 'auth/block.html',con)

from .genUid import *
def register(request):
    if request.method == "POST":
        form = AccountForm(request.POST)
        if form.is_valid():
            if User.objects.filter(    username=form.cleaned_data.get('username'),    email=form.cleaned_data.get('email'),    password=form.cleaned_data.get('password'),).exists():
                messages.error(request, 'Account already exists')
                return redirect('register')
            accx = User.objects.create(
                username=form.cleaned_data.get('username'),
                email=form.cleaned_data.get('email'),
                password=form.cleaned_data.get('password'),
            )
            form.instance.user = accx
            form.instance.Accountnum = acc()
            form.instance.uuid = referCode(12)
            form.save()
            ss = Account.objects.get(user=accx)
            sites=siteedit.objects.get(idx = 1)
            conx={
                        "site":siteedit.objects.get(idx = 1),
                        "user" :accx     ,
                        "user2" :ss     ,
                        "token":f'{sites.host}/activate/{ss.uuid}'
                         }
            email_sending(request,"./mail/activate.html",conx,f"{accx.username} verify Your Account",f"{accx.email.replace(" ", "")
     }")
            email_sending(request,"./mail/adminnotifie.html",conx,f" New User Registration",f"{sites.owneremail}")
            messages.success(request, 'An email has been sent to your email address. Please verify your account.')
            return redirect('register')  # Replace with your success URL
        else:
            messages.error(request, form.errors)
               # Replace with your success URL
    else:
        form = AccountForm()
 
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        'form':form
    }
    return render (request, "auth/register.html",con)
def loginuser(request):
    if request.method == "POST":
        accnum =request.POST['accnum']
        password =request.POST['password']
        if Account.objects.filter(Accountnum=accnum,  password=password, is_verified=False , banned=False).exists():
            print(accnum)
            print(password)
            ss = Account.objects.get(Accountnum=accnum,  password=password, is_verified=False)
            sites=siteedit.objects.get(idx = 1)
            conx={
                        "site":siteedit.objects.get(idx = 1),
                        "user" :acc     ,
                        "user2" :ss     ,
                        "token":f'{sites.host}/activate/{ss.uuid}'
                         }
            
            email_sending(request,"./mail/activate.html",conx,f"{acc.username} verify Your Account",f"{acc.email.replace(" ", "")
     }")
            messages.success(request, 'An email has been sent to your email address. Please verify your account.')
            return redirect('login')  # Replace with your success URL
        elif Account.objects.filter(Accountnum=accnum,  password=password,is_verified=True , banned=False).exists():
            print('{{site.logo.url}}')
            acc = Account.objects.get(Accountnum=accnum ,password=password)
            authenticate(request, username=acc.user.username, password=password)
            print(acc)
            if acc.Accountnum :
                login(request, acc.user)
                if acc.user.is_superuser:
                    return redirect('adminx',pk=acc.uuid)
                else:
                    return redirect('dashboard',pk=acc.uuid)
            else:
                 messages.error(request, 'Invalid login credentials')
        elif Account.objects.filter(Accountnum=accnum,  password=password,is_verified=True , banned=True).exists():
            return redirect('block')
        else:
            messages.error(request, 'Account not found')
    con ={
         "site":siteedit.objects.get(idx = 1),
        
    }
    return render (request, "auth/login.html",con)




from django.core.mail import send_mail,  EmailMultiAlternatives
from  django.utils.html import strip_tags
from django.conf import settings
from django.template.loader import get_template, render_to_string
def email_sending(request,tempname,context,subjects,to):
    try:
        tos = render_to_string(tempname,context=context )
        tags =strip_tags(tos)
        mas = EmailMultiAlternatives(
            subject = subjects,
            body=tags,
            from_email = settings.EMAIL_HOST_USER,
            to=[to]
        )
        mas.attach_alternative(tos, 'text/html')
        mas.send()
    except Exception as e:
        print(e)
        return False    
    
    
    
    
    
def approvedlocal(request, pk):
    
    if localtransferx.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = localtransferx.objects.get(uuid=pk)
        item.appoved = 'susscesful'
        item.save()
        messages.success(request, 'Transfer Approved')
        return redirect('adlocal', pk=uu.uuid)
    else:
        messages.error(request, 'Account not found')
def deletelocal(request, pk):
    
    if localtransferx.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = localtransferx.objects.get(uuid=pk)
        item.delete()
        messages.success(request, 'Transfer deleted successfully')
        return redirect('adlocal', pk=uu.uuid)
    else:
        messages.error(request, 'item  not found')
def banners(request, pk):
    
    if Account.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = Account.objects.get(uuid=pk)
        item.banned = True
        item.save()
        messages.success(request, 'account Banned successfully')
        return redirect('adalluser', pk=uu.uuid)
    else:
        messages.error(request, 'item  not found')
def verfiy(request, pk):
    
    if Account.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = Account.objects.get(uuid=pk)
        item.is_verified = True
        item.save()
        messages.success(request, 'account verifed successfully')
        return redirect('adalluser', pk=uu.uuid)
    else:
        messages.error(request, 'item  not found')
def deletelocal(request, pk):
    
    if localtransferx.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = localtransferx.objects.get(uuid=pk)
        item.delete()
        messages.success(request, 'Transfer deleted successfully')
        return redirect('adlocal', pk=uu.uuid)
    else:
        messages.error(request, 'item  not found')
    return True
def deleteinter(request, pk):
    
    if intertransferx.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = intertransferx.objects.get(uuid=pk)
        item.delete()
        messages.success(request, 'Transfer deleted successfully')
        return redirect('adinter', pk=uu.uuid)
    else:
        messages.error(request, 'item  not found')
    return True

def update_transaction_status(request, item,user,typex):
    if request.method == "POST":
        value = typex # Get status from form submission
        user = user
        item = item
        print(item,user)
        # Define status-specific email messages
        status_messages = {
            "pending": "Your transaction is currently being processed. You will receive an update once it has been completed.",
            "completed": "Your transaction has been successfully completed. You can review the details in your account.",
            "failed": "Unfortunately, your transaction could not be processed. Please try again later.",
            "reversed": "Your transaction has been reversed. The amount will be credited back to your account shortly.",
            "cancelled": "Your transaction has been cancelled as per your request. No further action is required.",
        }

        # Context for the email template
        conx = {
            "site": siteedit.objects.get(idx=1),
            "user": user,
            "item": item,
            "status_message": status_messages.get(value, "Please contact support for further details."),
            "status": value,
        }

        # Determine the email subject dynamically
        subject = f"Transaction Status Update: USD {item.Amount}"
        
        # Send email using the email_sending function
         
        email_sending(
            request,
            "./mail/statute.html",
            conx,
            subject,
            f"{user.email.replace(' ', '')}"
        )
  
        # Set success message for each status
        
        print( f"Transaction updated to {value} successfully")

    return print( "Invalid request")
       
        
def deleteuser(request, pk):
    
    if Account.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = Account.objects.get(uuid=pk)
        item.delete()
        messages.success(request, 'Account deleted successfully')
        return redirect('adinter', pk=uu.uuid)
    else:
        messages.error(request, 'Account  not found')
def approvedinter(request, pk):
    
    if intertransferx.objects.filter(uuid=pk).exists():
        uu = Account.objects.get(user=request.user)
        item = intertransferx.objects.get(uuid=pk)
        item.appoved = "susscesful" 
        item.save()
        messages.success(request, 'Transfer Approved')
        return redirect('adinter', pk=uu.uuid)
    else:
        messages.error(request, 'Account not found')
      
    
    
    
from itertools import chain   

@account_enabled_required
def dasboard(request,pk):
    user = Account.objects.get(uuid=pk)
    combined_queryset = chain(user.intertransfer.all()[:3], user.localtransfer.all()[:3])
    combined_queryset2 = chain(user.intertransfer.all() , user.localtransfer.all() )
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
        "combined_queryset":combined_queryset,
        "combined_queryset2":combined_queryset2,

    }
    return render (request, "user/home.html",con)
def statment(request,pk):
    user = Account.objects.get(uuid=pk)
    combined_queryset = chain(user.intertransfer.all(), user.localtransfer.all())
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
        "combined_queryset":combined_queryset,
        
    }
    return render (request, "user/statement.html",con)
    
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse


@account_enabled_required
def profile(request,pk):
    user = Account.objects.get(uuid=pk)
    profile = get_object_or_404(Account, uuid=user.uuid)
    if request.method == "POST":
        form = ProfileForms(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully')
            return redirect('profile', pk=user.uuid)  # Redirect to list view after update
        else:
            messages.error(request, form.errors)
    else:
        form = ProfileForms(instance=profile)
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
        "form":form,
    }
    return render (request, "user/profile.html",con)
 
    
@account_enabled_required   
def inter(request,pk):
    user = Account.objects.get(uuid=pk)
    if request.method == "POST":
        
        accname =request.POST['accname']
        accnum =request.POST['accnum']
        bankname =request.POST['bankname']
        swiftcode =request.POST['swiftcode']
        Bankaddress =request.POST['Bankaddress']
        Amount =request.POST['Amount']
        Description =request.POST['Description']
        if int(user.balance) <= int(Amount)+1 and  swiftcode and bankname and accnum and accname and Bankaddress and Amount and Description:
            messages.error(request, 'Insufficient balance')
        else:
            i = intertransferx.objects.create(
                uuid=referCode(12),
                accname=accname,
                accnum=accnum,
                bankname=bankname,
                swiftcode=swiftcode,
                Bankaddress=Bankaddress,
                Amount=Amount,
                appoved="pending",
                Description=Description,
            )
            user.intertransfer.add(i)
            user.balance = int(user.balance) - int(Amount)
            user.save()
            site =siteedit.objects.get(idx = 1)
            conx={
                        "site":siteedit.objects.get(idx = 1),
                        "user" :user     ,
                        "item" :i     ,
                          }
            email_sending(request,"./mail/trans.html",conx,f"International Transfer > #Debit Alert USD{Amount}  ",f"{user.email.replace(" ", "")
     }")
            email_sending(request,"./mail/admintrans.html",conx,f" User Transfer Request USD {Amount}  ",f"{site.owneremail}")
            messages.success(request, 'Transfer on process !Note it might take 5min to due to international transfer')  
            return redirect('local',pk=user.uuid)
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
    }
    return render (request, "user/inter.html",con)
    
def pin(request,pk):
    user = Account.objects.get(uuid=pk)
    if request.method == "POST":
        currentpin = request.POST['current']
        pin = request.POST['pin1']
        pin1 = request.POST['pin2']
        if currentpin == user.pin :
            if pin == pin1:
                Account.objects.filter(uuid=pk).update(pin=pin)
                messages.success(request, 'Pin Updated successfully')
            else:
                messages.error(request, 'Pin do not match')
        else:
            messages.error(request, 'Current Pin do not match')        
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
    }
    return render (request, "user/pin.html",con)
    
def tiketdelet(request,pk):
    user = Account.objects.get(user=request.user)
    if Subjecttiket.objects.filter(uuid=pk).exists():
        tikets = Subjecttiket.objects.get(uuid=pk)
        messages.success(request, 'Ticket deleted successfully')
        tikets.delete()
        return redirect('tiket',pk=user.uuid)
    else:
        messages.error(request, 'Ticket not found')
def tiket(request,pk):
    user = Account.objects.get(uuid=pk)
    
    if request.method == "POST":
        subject = request.POST['subject']
        category = request.POST['category']
        details = request.POST['details'] 
        if subject and category and details:
            mai = Subjecttiket.objects.create(
                Subject=subject,
                Priority=category,
                uuid = referCode(12),
                Details=details,
            )
            user.Subjecttiketmain.add(mai)
            messages.success(request, 'Ticket created successfully')
            redirect('tiket',pk=user.uuid)
        else:
            messages.error(request, 'Please fill all fields')    
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
    }
    return render (request, "user/tiket.html",con)
    
    
def password(request,pk):
    user = Account.objects.get(uuid=pk)
    if request.method == "POST":
        currentpassword = request.POST['current_password']
        password = request.POST['password']
        password1 = request.POST['password_confirmation']
        
        if currentpassword == user.password :
            if password == password1:
                Account.objects.filter(uuid=pk).update(password=password)
                messages.success(request, 'Password Updated successfully')
            else:
                messages.error(request, 'Password do not match')
        else:
            messages.error(request, 'Current Password do not match')
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
    }
    return render (request, "user/password.html",con)

@account_enabled_required   
def local(request,pk):
    user = Account.objects.get(uuid=pk)
    site =siteedit.objects.get(idx = 1)
    if request.method == "POST":
        name = request.POST['name']
        acct_no = request.POST['acct_no']

        rout_no = request.POST['rout_no']
        amount = request.POST['amount']
        pin = request.POST['pin']
        Discription = request.POST['Discription']
        if int(user.balance) <= int(amount)+1:
            messages.error(request, 'Insufficient balance')
        if pin == user.pin:
            if Account.objects.filter(Accountnum=acct_no).exists():
                ss = Account.objects.get(Accountnum=acct_no)
                i = localtransferx.objects.create(
                    uuid=referCode(12),
                    accname=name,
                    accnum=acct_no,
                    Amount=amount,
                    Routing=rout_no,
                    types ="Debit",
                    Description=Discription,
                )
                ix = localtransferx.objects.create(
                    uuid=referCode(12),
                    accname=name,
                    accnum=acct_no,
                    Amount=amount,
                    Routing=rout_no,
                    Description=Discription,
                    types ="Credit",
                )
                i.save()
                user.balance = int(user.balance) - int(amount)
                user.save()
                ss.save()
                user.localtransfer.add(i)
                ss.localtransfer.add(ix)
                conx={
                        "site":siteedit.objects.get(idx = 1),
                        "user" :user     ,
                        "item" :i     ,
                        "item1" :ix     ,
                        "user2" :ss     ,
                         }
                email_sending(request,"./mail/trans.html",conx,f" Debit Alert USD{amount}  ",f"{user.email.replace(" ", "")
     }")
                email_sending(request,"./mail/trans.html",conx,f" credit Alert USD{amount}  ",f"{ss.email.replace(" ", "")
     }")
                email_sending(request,"./mail/admintrans.html",conx,f" User Transfer Request  USD {amount}  ",f"{site.owneremail.replace(" ", "")
     }")
                messages.success(request, f'Transfer to {ss.username} on process ')
                return redirect('local',pk=user.uuid)
            else:
                i = localtransferx.objects.create(
                    uuid=referCode(12),
                    accname=name,
                    accnum=acct_no,
                    Amount=amount,
                    Routing=rout_no,
                    types ="Debit",
                    Description=Discription,
                )
                user.localtransfer.add(i)
                user.balance = int(user.balance) - int(amount)
                user.save()
                site =siteedit.objects.get(idx = 1)
                conx={
                        "site":siteedit.objects.get(idx = 1),
                        "user" :user     ,
                        "item" :i     ,
                         
                       
                         }
                email_sending(request,"./mail/trans.html",conx,f" Debit Alert USD{amount}  ",f"{user.email.replace(" ", "")
     }")
                email_sending(request,"./mail/admintrans.html",conx,f" User Transfer Request USD {amount}  ",f"{site.owneremail}")
                messages.success(request, 'Transfer on process')  
                return redirect('local',pk=user.uuid)
                
        else:
            messages.error(request, 'Pin do not match')
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
    }
    return render (request, "user/local.html",con)
    
 
    
    
def logoutuser(request):
    logout(request)
    return redirect('loginuser')










def adminx(request,pk):
    adminlo = Account.objects.get(uuid=pk)

     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/home.html",con)


def adpassword(request,pk):
    adminlo = Account.objects.get(uuid=pk)
    if request.method == 'POST':
        if request.POST['password'] :
            adminlo.password =  request.POST['password']
            adminlo.save()
            print(request.POST['password'])
            print(adminlo.password)
            messages.success(request, 'Password changed successfully')
            return redirect('adpassword',pk=adminlo.uuid)
        else:
            messages.error(request, 'Password do not match')
     
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":adminlo,    
    }   
    return render (request, "adminx/passwordchange.html",con)


def sendemail(request,pk):
    adminlo = Account.objects.get(uuid=pk)
    if request.method == 'POST':
            to= request.POST.get('to')
            name = request.POST.get('name')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            if to and subject and message:
                print(to)
                conx={
                            "site":siteedit.objects.get(idx = 1),
                            "user" :name     ,
                            "message" :message     ,
                            }
                email_sending(request,"./mail/notify.html",conx,f"{subject} ",f"{to.replace(" ", "")
        }")
            
     
     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/sendmail.html",con)


def adalluser(request,pk):
    adminlo = Account.objects.get(uuid=pk)

     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/alluser.html",con)


def adtiket(request,pk):
    adminlo = Account.objects.get(uuid=pk)

     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/tiket.html",con)
def aduseredit(request,pk):
    adminlo = Account.objects.get(user=request.user)
    formstat = localFormtanit()
    formstatinter = InterFormtanit()
    item = Account.objects.get(uuid=pk)
    profile = get_object_or_404(Account, uuid=pk)
    form = adminProfileForms(instance=profile)
    if request.method == "POST" and not request.POST.get('types') and not request.POST.get('uuids') :
        form = adminProfileForms(request.POST,  instance=profile)
        uploaded_file = request.FILES['files']
        print(uploaded_file)
        if form.is_valid():
            blob_url = upload_file_to_blob(uploaded_file, uploaded_file.name)
            print(blob_url)
            form.instance.profile_picture=blob_url
            form.save()
            messages.success(request, 'site updated successfully')
            return redirect('aduseredit', pk=item.uuid)  # Redirect to list view after update
        else:
            messages.error(request, form.errors)
    
    if request.method == "POST" and request.POST.get('types')and not request.POST.get('uuids') :
        types = request.POST.get('types')
        trnafertypes = request.POST.get('typefe')
        amount = request.POST.get('amount')
        end_date = request.POST.get('end_date')
        content = request.POST.get('content')
        if types and amount and end_date and content: 
            if trnafertypes == 'local':
                loc = localtransferx.objects.create(types=types,accname=get_random_name(),appoved="Pending", Routing=referCode(9) ,Amount=amount, date=end_date, Description=content, )
                item.localtransfer.add(loc)
                if types == 'debit': 
                    if int(item.balance) < int(amount):
                        messages.error(request, f'insufficient balance to transfer balance:{item.balance}')
                        loc.delete()
                    else:
                        item.balance = int(item.balance) - int(amount)
                        messages.success(request, ' Local transfer : credited  successfully ')
                        
                if types == 'credit':
                    item.balance = int(item.balance) + int(amount)
                    messages.success(request, 'local transfer : created  successfully')
                return redirect('aduseredit', pk=item.uuid)
            elif trnafertypes == 'Inter':
                inters = intertransferx.objects.create(bankname = get_random_bank_name(),types=types, swiftcode = generate_swift_code(), accname=get_random_name(),appoved="Pending"  ,Amount=amount, date=end_date, Description=content, )
                item.intertransfer.add(inters)
                if types == 'debit':
                    if item.balance < int(amount):
                        messages.error(request, 'International insufficient balance')
                        loc.delete()
                    else:
                        item.balance = int(item.balance) - int(amount)
                        messages.success(request, ' International : debit  successfully ')
                if types == 'credit':
                    item.balance = int(item.balance) + int(amount)
                    messages.success(request, ' International : credited  successfully ')
                return redirect('aduseredit', pk=item.uuid)
    
    
    if request.method == "POST" and request.POST.get('uuids') :
        itemid = request.POST.get('uuids')
        swiftcodexc = request.POST.get('swiftcodexc')
        if intertransferx.objects.filter(uuid=itemid).exists() or localtransferx.objects.filter(uuid=itemid).exists():
            uu = Account.objects.get(uuid=pk)
            print(swiftcodexc, 'valuebsb')
            if swiftcodexc == "none":
                item = localtransferx.objects.get(uuid=itemid)
                formstat = localFormtanit(request.POST,   instance=item)
                if formstat.is_valid():
                    print(formstat.cleaned_data.get('username'))
                    formstat.save()
                    messages.success(request, 'local transfer updated successfully')
                    
                    update_transaction_status(request, item,profile,formstat.cleaned_data.get('username'))
                    return redirect('aduseredit', pk=pk)  
                    
                else:
                    messages.error(request, 'Profile update failed')
                
            else:
                item = intertransferx.objects.get(uuid=itemid)
                formstatinter = InterFormtanit(request.POST,   instance=item)
                if formstatinter.is_valid():
                    formstatinter.save()
                    messages.success(request, 'inter-transfer updated successfully')
                    update_transaction_status(request, item,profile,formstatinter.cleaned_data.get('appoved'))
                    
                    return redirect('aduseredit', pk=pk)  
            
        else:
            messages.error(request, 'transaction was not found')
    else:
        form = adminProfileForms(instance=profile)
        formstat = localFormtanit()
        formstatinter = InterFormtanit()
        
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    "form":form or None,    
    "item":item,    
    "formstat":formstat,    
    "formstatinter":formstatinter,    
    }   
    return render (request, "adminx/edituser.html",con)





def adlocal(request,pk):
    adminlo = Account.objects.get(uuid=pk)

     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/local.html",con)
def adsettings(request,pk):

    user = Account.objects.get(user=request.user)
    profile = get_object_or_404(siteedit, idx=1)
    if request.method == "POST":
        form = siteForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
            messages.success(request, 'site updated successfully')
            return redirect('adsettings', pk=user.uuid)  # Redirect to list view after update
        else:
            messages.error(request, form.errors)
    else:
        form = siteForm(instance=profile)
    con ={
         "site":siteedit.objects.get(idx = 1),
        "user":user,
        "form":form,
    }
      
    return render (request, "adminx/general.html",con)
def adinter(request,pk):
    adminlo = Account.objects.get(uuid=pk)

     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/inter.html",con)
def adtiketdetail(request,pk):
    adminlo = Account.objects.get(user=request.user)
    Subjecttiket.objects.get(id=pk)
    
     
    con ={
         "site":siteedit.objects.get(idx = 1),
    "user":adminlo,    
    }   
    return render (request, "adminx/tiketdetail.html",con)