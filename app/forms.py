from django import forms
from .models import *

class AccountForm(forms.ModelForm):
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
        }),
        label="Confirm Password"
    )
    
    class Meta:
        model = Account
        fields = [
            'username', 
            'email', 
            'gender', 
            'mobile', 
            'password', 
            'occupation', 
            'address', 
            'marital_status', 
            'type_of_account'
        ]
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'username',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'email',
            }),
            'gender': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
            'mobile': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'tel',
            }),
            'password': forms.PasswordInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'new-password',
            }),
            'occupation': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
            'address': forms.Textarea(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'rows': 3,
            }),
            'marital_status': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
            'type_of_account': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
        }
    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        
        if password != confirm_password:
            self.add_error('confirm_password', "Passwords do not match.")
class ProfileForms(forms.ModelForm):
     
    
    class Meta:
        model = Account
        fields = [
            'username', 
            'email', 
            'gender', 
            'mobile', 
            'occupation', 
            'address', 
            'City', 
            'Zip', 
            'Country', 
            'marital_status', 
            'type_of_account',
            'profile_picture',
        ]
        widgets = {
            'username': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'username',
                'readonly': 'true',
            }),
            'Country': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'Country',
            }),
            'City': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'City',
            }),
            'Zip': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'Zip',
            }),
            'profile_picture': forms.ClearableFileInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'profile_picture',
            }),
            'email': forms.EmailInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'email',
                   'readonly': 'true',
            }),
            'gender': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
            'mobile': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'autocomplete': 'tel',
                   'readonly': 'true',
            }),
          
            'occupation': forms.TextInput(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
            }),
            'address': forms.Textarea(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                'rows': 3,
                   'readonly': 'true',
            }),
            'marital_status': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                   'readonly': 'true',
            }),
            'type_of_account': forms.Select(attrs={
                'class': 'ky vo agd aoc aty auk ayn baw bhh bhj bhm bqb bzm bzo bzv czw !p-3',
                   'readonly': 'true',
            }),
        }
 
 
 
class localFormtanit(forms.ModelForm):
    class Meta:
        model = localtransferx
        fields =['appoved']
 
class InterFormtanit(forms.ModelForm):
    class Meta:
        model = intertransferx
        fields =['appoved']
 
class adminProfileForms(forms.ModelForm):
     
    
    class Meta:
        model = Account
        fields ="__all__"
        exclude=["profile_picture"]
        
 
class siteForm(forms.ModelForm):
     
    
    class Meta:
        model = siteedit
        fields = '__all__'