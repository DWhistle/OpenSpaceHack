FROM openjdk:12
EXPOSE 5000
WORKDIR /opt/app
COPY ./build/libs/backend.jar backend.jar
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && java -jar /opt/app/backend.jar