
template.helper('getLocale',getLocale);
template.helper('isLogin', function() {
    return G.isLogin == 1
})
template.helper('getLang', function() {
    return G.lan;
})
template.helper('getLoginUrl', function() {
    return ''
})
template.helper('getRegisterUrl', function() {
    return ''
})
template.helper('getMyInfoUrl', function() {
    return ''
})
template.helper('getLogoutUrl', function() {
    return ''
})
template.helper('isset', function() {
    return G.user.username != ''
})
template.helper('common', common)
template.helper('isNaN', function (value) {
    return isNaN(value);
});
template.helper('getUrl', function (type, value) {
    if(type == 1) {
        return G.getAllUrl('site/p?id=') + value;
    }else {
        return G.getAllUrl('site/news?id=') + value;
    }
    
});
template.helper('getUser', function() {
    return G.user;
})
template.helper('config', function (type, value) {
    return {
        server: 'http://192.168.1.116:8080/mmclient/static/newHtml'
    }
});

function getLocale() {
    return 'cn'
}

function common() {
    return {
        login: '登录',
        register: '注册',
        username: '用户名',
        logout: '注销',
        nav_search: '搜索',
        nav_buy: '购买',
        nav_you_need: '你需要',
        nav_service: '服务',
        nav_news_center: '新闻中心',
        nav_about_us: '关于我们',
        nav_join_us: '加入我们',
        nav_support_support: '技术支持',
        nav_forum_community: '交流',
        master: '主机类',
        atomizer: '雾化器',
        related: '周边',
        accessories: '配件',
        company_product_center: '产品中心',
        company_product_more: '更多',
        company_about_us: '关于Asvape',
        company_des: 'Asvape简介',
        qq: '155****235',
        company_tel: '电话',
        mail: 'info@asvape.net',
        company_join_us: '了解Asvape',
        company_follow_us: '关注我们',
        qrcode: 'http://home.asvape.net/static/img/h-code.png'
    }
}
