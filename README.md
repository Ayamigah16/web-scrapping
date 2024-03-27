# JavaScript Web Scraping

This repository contains JavaScript scripts for web scraping tasks. Each script performs a specific task related to web scraping using Node.js.

## Requirements

- Node.js 14.x
- `semistandard` package for code style compliance
- `request` module for making HTTP requests
- Ubuntu 20.04 LTS environment

## Installation

1. Install Node.js 14:

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```


2. Install `semistandard` globally:

```
sudo npm install semistandard --global
```


3. Install `request` module globally:

```
sudo npm install request --global
export NODE_PATH=/usr/lib/node_modules
```


## Usage

Each script in this repository serves a specific purpose related to web scraping. You can run the scripts using Node.js.

For example:

```
node 0-readme.js cisfun
```

#### NB:

- The first line of all your files should be exactly 
``` #!/usr/bin/node ```


## Scripts

1. **readme.js**: Reads and prints the content of a file.
2. **writeme.js**: Writes a string to a file.
3. **statuscode.js**: Displays the status code of a GET request.
4. **starwars_title.js**: Prints the title of a Star Wars movie based on the episode number.
5. **starwars_count.js**: Prints the number of movies where the character "Wedge Antilles" is present.
6. **request_store.js**: Gets the contents of a webpage and stores it in a file.
7. **completed_tasks.js**: Computes the number of tasks completed by user ID.
8. **starwars_characters.js**: Prints all characters of a Star Wars movie.
9. **starwars_characters_v2.js**: Prints all characters of a Star Wars movie in the same order as the list in the /films/ response.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
