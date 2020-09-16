// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "62tlp0oc0jgf07r7psfm85ff69",     // CognitoClientID
  "api_base_url": "https://ypehadrfnk.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-starcode-todo.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1axlmm96fls02.amplifyapp.com"                                      // AmplifyURL
};

export default config;
