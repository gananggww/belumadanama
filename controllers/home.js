class Home {

    all_articles(req, res)  {
        res.send('hallo')
    }

    all_detail_articles(req, res)  {
        res.send('hallo')
    }

    detail_article(req, res)  {
        res.send('hallo')
    }
    
    newest_articles(req, res) {
        res.send('hallo')
    }

    popular_articles(req, res) {
        res.send('hoho')
    }

}

module.exports = new Home()

