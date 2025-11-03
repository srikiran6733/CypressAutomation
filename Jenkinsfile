pipeline {
    agent any

parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/tests/*.spec.js', description: 'Enter the script that you want to execute')
       choice(name: 'browser', choices: ['chrome', 'edge', 'firefox'], description: 'Choice the browser where you want to execute the script')
    }

options {
     ansiColor('xterm')
       bat 'npx cypress run --browser chrome'
    }

    stages {
        stage('Building') {
            steps {
                echo 'Building the application...'
                // Add build steps here
            }
        }
        stage('Testing') {
            steps {
               bat "npm i"
                bat "npx cypress run --spec ${params.SPEC} --browser ${params.browser}"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                echo "Deployed the application on ${params.browser} browser"
            }
        }
        post {
            always {
               publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports/html',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test HTML Report',
                    reportTitles: ''
                ])
            }
        }
    } 
}