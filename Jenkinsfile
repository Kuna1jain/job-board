pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-app"
        CONTAINER_NAME = "react-container"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Kuna1jain/job-board.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker run -d \
                    -p 80:80 \
                    --name $CONTAINER_NAME \
                    $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "🚀 React app deployed successfully!"
        }
        failure {
            echo "❌ Deployment failed"
        }
    }
}
