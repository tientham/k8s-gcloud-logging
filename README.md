- to create client project:
  npx create-react-app client

- Docker cmds:
 $ docker build -t gcr.io/papaya-testing-project/test-logging-client-deployment:v1 .
 $ docker push gcr.io/papaya-testing-project/test-logging-client-deployment:v1
 $ docker build -t gcr.io/papaya-testing-project/test-logging-users-deployment:v9 .
 $ docker push gcr.io/papaya-testing-project/test-logging-users-deployment:v9
 $ docker build -t gcr.io/papaya-testing-project/test-logging-payment-deployment:v9 .
 $ docker push gcr.io/papaya-testing-project/test-logging-payment-deployment:v9
