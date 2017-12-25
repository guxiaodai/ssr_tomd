var map = {
	'home': {
		'page': 'home.html',
		'template': [
            {
                name: 'home_tpl',
                api: [{
                    path: 'api/site/home',
                    transform: 'transHome'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'about': {
        'page': 'about.html',
        'template': [
            {
                name: 'about_tpl',
                api: [{
                    path: 'api/site/about',
                    transform: 'transAbout'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'afterSale': {
        'page': 'afterSale.html',
        'template': [
            {
                name: 'afterSale_tpl',
                api: []
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'community': {
        'page': 'community.html',
        'template': [
            {
                name: 'community_tpl',
                api: []
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'customers': {
        'page': 'customers.html',
        'template': [
            {
                name: 'customers_tpl',
                api: []
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'join': {
        'page': 'join.html',
        'template': [
            {
                name: 'join_tpl',
                api: [{
                    path: 'api/site/join',
                    transform: 'transJoin'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'newCenter': {
        'page': 'newCenter.html',
        'template': [
            {
                name: 'newsCenter_tpl',
                api: [{
                    path: 'api/site/news-center',
                    transform: 'transNewCenter'
                }]
            },
            {
                name: 'business_list_tpl',
                api: [{
                    path: 'api/app/news-list',
                    query: { page: 1, type: 1 },
                    transform: 'transNewsList'
                }],
                container: '.recent-list'
            },
            {
                name: 'page_list_tpl',
                api: [{
                    path: 'api/app/news-list',
                    query: { page: 1, type: 1 },
                    transform: 'transNewsPagination'
                }],
                container: '.recent-pagination'
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'news': {
        'page': 'news.html',
        'template': [
            {
                name: 'news_tpl',
                api: [{
                    path: 'api/site/news',
                    transform: 'transNews'
                }]
            },
            {
                name: 'recommend_tpl',
                api: [{
                    path: 'api/app/recommend',
                    transform: 'transNewsRecommend'
                }],
                container: '.recommend-list'
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'products': {
        'page': 'products.html',
        'template': [
            {
                name: 'products_tpl',
                api: [{
                    path: 'api/site/products',
                    transform: 'transProducts'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'p': {
        'page': 'p.html',
        'template': [
            {
                name: 'p_tpl',
                api: [{
                    path: 'api/site/p',
                    transform: 'transP'
                }]
            },
            {
                name: 'recommend_tpl',
                api: [{
                    path: 'api/product/recommend',
                    transform: 'transPRecommend'
                }],
                container: '.recommend-list'
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'search': {
        'page': 'search.html',
        'template': [
            {
                name: 'search_tpl',
                api: []
            },
            {
                name: 'search_result_list_tpl',
                api: [{
                    path: 'api/app/search',
                    transform: 'transSearchList'
                }],
                container: '#tab1'
            },
            {
                name: 'page_list_tpl',
                api: [{
                    path: 'api/app/search',
                    transform: 'transSearchPagination'
                }],
                container: '.g-pagination'
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'verify': {
        'page': 'verify.html',
        'template': [
            {
                name: 'verify_tpl',
                api: []
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'contact': {
        'page': 'contact.html',
        'template': [
            {
                name: 'contact_tpl',
                api: [{
                    path: 'api/site/contact-us',
                    transform: 'transContact'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    },
    'idea': {
        'page': 'idea.html',
        'template': [
            {
                name: 'idea_tpl',
                api: [{
                    path: '',
                    transform: 'transIdea'
                }]
            },
            {
                name: 'common_company_tpl',
                api: [{
                    path: 'api/site/foot-data',
                    transform: 'transCompany'
                }],
                container: '#company-foot'
            }
        ]
    }
}

if(typeof window == 'undefined') {
    module.exports = map;
}
