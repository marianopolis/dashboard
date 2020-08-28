# dashboard

Dashboard for MSU Congress to monitor student quetsions and concerns in real time.

# Installation Steps

Install Python on your computer

Install Git on your computer

Clone this GitHub repository:

```bash
git clone https://github.com/marianopolis/dashboard.git
```

Change directory to this dashboard directory
```bash
cd dashboard
```

Install Python requirements using Pip
```bash
pip install -r requirements.txt
```

Setup environment variables

`API_KEY` is the API key that the Google Sheets API uses to grant accesss to reading the Google Sheet. `SHEET_ID` is the ID in the Google Sheet URL that identifies the Google Sheet. Please refer to the Tech Committee members for setting the values of the environment variables.  

```bash
set API_KEY=<api key>
set SHEET_ID=<sheet ID>
```

Run the application using Python
```bash
python app.py
```

Go to the `http://localhost:5000` URL on your browswer to view the rendered webpage.
