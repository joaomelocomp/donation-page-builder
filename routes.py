from flask import Flask, render_template, request, redirect, url_for, session

def init_app(app):
    @app.route('/')
    def homepage():
        return render_template('homepage.html')
