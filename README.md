=>http://localhost:3000/api/protected
    ->params:-
            -Header:-
                Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNzUzMzg2NzU4LCJleHAiOjE3NTMzOTAzNTh9.xCQqnGPnABFxtAA35Ddv54Apd21KDJWYoSGFu2oc8mo
=>http://localhost:3000/api/login
    ->params:-
            -Body:-
                {
                    "email": "test@example.com",
                    "password": "test123"
                }