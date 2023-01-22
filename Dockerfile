FROM ruby:3.1.3-buster

ADD . /src
WORKDIR /src
RUN bundle install
EXPOSE 5000
CMD jekyll serve --baseurl '' -w --port 5000
