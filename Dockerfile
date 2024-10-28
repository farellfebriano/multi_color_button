From nginx:latest

RUN mkdir myAplication &&\
    apt-get update &&\
    apt-get install -y nano vim-tiny

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]

#/usr/share/nginx/html