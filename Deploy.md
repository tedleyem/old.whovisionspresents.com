If you ever need to rebuild the deploy keys 
follow these steps 


https://dev.to/achukka/deploy-react-app-using-github-actions-157d

Step 3: Create SSH Deploy Key

Generate your deploy key

ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f "<your-deploy-branch>" -N ""

