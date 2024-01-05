# Project go-tbc-bot

A document based chatbot for uploading and querying documents locally.


https://github.com/Burakbgmk/go-tbc-bot/assets/95534656/ab8df7ad-8f45-489e-8be3-ae56e8f576b5

## Technologies

-> This project is mainly built with golang, templ and htmx. In the client side there is a little bit javascript for some cases. 

-> Styling done by tailwindcss.

-> As embedding and generative ai, mistral ai model is used.

-> Chromadb vector database is used for storing embeddings.

-> Langchaingo is used for communicating with ai model.


## How to use it locally

-> Basicly you need an ollama client and a chroma db instance.

Here is how I do it;

- Download ollama from https://ollama.ai/ website.

- Run "ollama push mistral" from terminal to use mistral as the model. (llama 2 is also not a bad choice)

- Install docker if you do not have already.

- Run "docker run -p 8000:8000 chromadb/chroma" to spin up a chromadb instant

Now you are all set. Just create .env file for the project for setting PORT and CHROMA_URL(it should be the same as above) and run the project.

## Limitations

- Since when running locally I can only use 7B parameter models and my ram is limited on my local computer, app is a bit slow.

- Also, probably because of the same problem, Pdfs with pages more then 2-3 takes too long to embed and causing bugs. 

This project is early stages and still in progress.



