pipeline {
    agent any

    tools{
        nodejs 'nodejs-1s'
    }

    stages{

        stage('Checkout Code') {
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps{
                sh 'npm ci'
            }
        }

        stage('Build'){
            steps{
                sh 'npm run build'
            }
        }

        stage('test'){
            steps{
                sh 'npm test'
            }
        }
    }
}