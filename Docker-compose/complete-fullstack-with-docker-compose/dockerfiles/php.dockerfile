FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

RUN docker-app-ext-install pdo pdo_mysql