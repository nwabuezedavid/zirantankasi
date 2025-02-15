from app.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path


urlpatterns = [
    path("",home, name="home"),
    path("about/",about, name="about"),
    path("Commercial/",Commercial, name="Commercial"),
    path("bank/",bank, name="bank"),
    path("sitemap/",sitemap, name="sitemap"),
    path("branches-atms/",branchesatms, name="branchesatms"),
    path("Investor/",Investor, name="Investor"),
    path("Contact/",Contact, name="Contact"),
    path("ServiceFees/",ServiceFees, name="ServiceFees"),
    path("notice/",notice, name="notice"),
    path("Calculation/",Calculation, name="Calculation"),
    path("iban/",iban, name="iban"),
    path("register/",register, name="register"),
    path("login/",loginuser, name="loginuser"),
    path("logout/",logoutuser, name="logoutuser"),
    path("activate/<pk>/",activate, name="activate"),
    path("block/",block, name="block"),
    path("policy/",block, name="policy"),
    
    
    
    
    # dashboard
    path("dashboard/<pk>/",dasboard, name="dashboard"),
    path("profile/<pk>/",profile, name="profile"),
    path("inter/<pk>/",inter, name="inter"),
    path("pin/<pk>/",pin, name="pin"),
    path("tiket/<pk>/",tiket, name="tiket"),
    path("password/<pk>/",password, name="password"),
    path("local/<pk>/",local, name="local"),
    path("statement/<pk>/",statment, name="statment"),
    
    
    # tiketdelet
    path("tiketdelet/<pk>/",tiketdelet, name="tiketdelet"),
    path("deleteuser/<pk>/",deleteuser, name="deleteuser"),
    path("approvedlocal/<pk>/",approvedlocal, name="approvedlocal"),
    path("deletelocal/<pk>/",deletelocal, name="deletelocal"),
    path("banners/<pk>/",banners, name="banners"),
    path("deleteinter/<pk>/",deleteinter, name="deleteinter"),
    path("approvedinter/<pk>/",approvedinter, name="approvedinter"),
    path("verfiy/<pk>/",verfiy, name="verfiy"),
    
    
    
    
    
    # adminx
    
    path("adminx/<pk>/",adminx, name="adminx"),
    path("settings/<pk>/",adsettings, name="adsettings"),
    path("adpassword/<pk>/",adpassword, name="adpassword"),
    path("email/<pk>/",sendemail, name="sendemail"),
    path("adalluser/<pk>/",adalluser, name="adalluser"),
    path("adtiket/<pk>/",adtiket, name="adtiket"),
    path("aduseredit/<pk>/",aduseredit, name="aduseredit"),
    path("adlocal/<pk>/",adlocal, name="adlocal"),
    path("adinter/<pk>/",adinter, name="adinter"),
]


if settings.DEBUG:  # Only serve media files during development
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)