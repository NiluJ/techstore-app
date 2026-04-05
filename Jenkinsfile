pipeline {
    agent any

    environment {
        ACR_NAME = "acrtechstorenilu"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    docker.build("${ACR_NAME}.azurecr.io/backend:${IMAGE_TAG}", "./backend")
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    docker.build("${ACR_NAME}.azurecr.io/frontend:${IMAGE_TAG}", "./frontend")
                }
            }
        }

    }
}