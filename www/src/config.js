// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4vd1l9fudsnlferg3dgs7u9tia",     // CognitoClientID
  "api_base_url": "https://ugl54sooxh.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-starcode-todo.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d16a26j8zppotx.amplifyapp.com"                                      // AmplifyURL
};

export default config;
