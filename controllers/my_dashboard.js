class MyDashboard {

    create_article(req, res)  {
        res.send('hallo')
    }

    edit_article(req, res) {
        res.send('hallo')
    }

    delete_article(req, res) {
        res.send('hallo')
    }

    articles_by_writer(req, res) {
        res.send('hoho')
    }
}

module.exports = new MyDashboard()

