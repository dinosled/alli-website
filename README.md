# alli-website

## Website
[comment]: <> (all instructions can be found here: https://medium.com/@pablo.delvalle.cr/googles-firebase-for-simple-static-site-hosting-with-ssl-certificate-f0f001ffbf6f)

### Setup
__Buy URL__
https://domains.google.com

__Deploy with Google Firebase__
- Login to https://console.firebase.google.com/
- Create project (Alli)
- From your local machine, open a terminal and switch to the root directory of the github project
- Run `firebase login` and authenticate with the google credentials you used above
- Run `firebase init`, choose `Hosting: Configure files for Firebase Hosting ...` 
- Use existing project -> alli-33a73
- Public directory: .
- Configure as single-page app: n
- Setup automatic builds: n
- index.html exists, Overwrite?: n
- Run `firebase deploy` 

__Associate bought URL with firebase deployment__
- Login to https://console.firebase.google.com/
- Build -> Hosting -> Add custom domain
    - Enter domain: alli-app.com
    - Verfiy Ownership: copy IP, go to https://domains.google.com/registrar/alli-app.com/dns -> Custom Records -> Type: A -> Data: Enter IP from above -> Save

### Update
- Open a terminal, switch to the root folder of the github repository
- Run `firebase login` 
- Run `firebase deploy`
