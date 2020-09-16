// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6vv1estj4k2d7fj71gkc2j6857",                               // CognitoClientID
  "api_base_url": "https://3nsoxdb685.execute-api.eu-west-2.amazonaws.com/prod",                  // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-starcode-todo.auth.eu-west-2.amazoncognito.com",    // CognitoDomainName
  "redirect_url": "https://master.d10khfmitfemtr.amplifyapp.com"                              // AmplifyURL
};

export default config;
