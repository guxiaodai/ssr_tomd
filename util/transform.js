
(function(root, factory) {
    if (typeof exports === "object") {
        module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory(root));
    } else {
        root.LazyLoad = factory(root);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function(root) {
    var getPage = function(allpage, curpage) {
        allpage = parseInt(allpage);
        curpage = parseInt(curpage);
        if(allpage < 6){
            var arr = [];
            for (var i = 0 ;i < allpage; i++){
                arr.push(i+1)
            }
            return arr;
        }else {
            if(curpage < 4){
                var arr = [];
                for (var i = 1; i <= curpage + 1; i++){
                    arr.push(i);
                }
                arr.push('...', allpage);
                return arr;
            }else if(curpage >= allpage - 2){
                var arr = [1, '...'];
                for (var i = curpage-1; i<= allpage; i++){
                    arr.push(i);
                }
                return arr;
            }else {
                var arr = [1, '...'];
                for (var i = curpage-1; i <= curpage+1; i++){
                    arr.push(i);
                }
                arr.push('...', allpage);
                return arr;
            }
        }
    }

    var trans = {
        transHome: function(_data) {
            return {
                data: {
                    list: _data.banner_array,
                    product_array: _data.product_array,
                }
            }
        },
        transAbout: function(_data) {
            return {
                data: {
                    detail_array: _data.detail_array,
                    company: _data.company,
                }
            }
        },
        transJoin: function(_data) {
            return {
                data: {
                    jobCates: _data.jobCates
                }
            }
        },
        transNewCenter: function(_data) {
            return {
                data: {
                    newsRoll: _data.newsRoll
                }
            }
        },
        transNewsList: function(_data) {
            return {
                data: !!_data.product_news ? _data.product_news.list : []
            }
        },
        transNewsPagination: function(_data) {
            return { data: getPage(Math.ceil(_data.product_news.total/10)), cur: 1, all: Math.ceil(_data.product_news.total/10) }
        },
        transNews: function(_data) {
            return {
                data: {
                    news: _data.news
                }
            }
        },
        transNewsRecommend: function(_data) {
            return {
                data: _data
            }
        },
        transProducts: function(_data) {
            return {
                data: {
                    list: _data.banner_array
                },
                pData: {
                    list: _data.product_top_array
                }
            }
        },
        transP: function(_data) {
    
            return {
                data: {
                    product: _data.product,
                }
            }
        },
        transPRecommend: function(_data) {
            return {
                data: _data
            }
        },
        transSearchList: function(_data) {
            return {
                data: _data
            }
        },
        transSearchPagination: function(_data) {
            return { data: getPage(Math.ceil(_data.total/10)), cur: 1, all: Math.ceil(_data.total/10) }
        },
        transContact: function(_data) {
            return {
                data: {
                    company: _data.company,
                    _baidu_address: _data.baidu_address,
                }
            }
        },
        transIdea: function(_data) {
            var download_list = [
                {
                    "release_date" : "2017.07.27",
                    "description" : G.lan == "cn" ? "Michael 200W芯片更新包" : "Michael VO200 Update",
                    "package" : G.lan == "cn"?"百鬼夜行.rar":"Michael_VO200_Update.rar",
                    "download" : G.lan == "cn"?"http://asvape.net/static/files/百鬼夜行.rar":"http://asvape.net/static/files/Michael_VO200_Update.rar"
                },
                {
                    "release_date" : "2017.06.28",
                    "description" : G.lan == "cn" ? "ASVAPE 200W 刷机包" : "Michael mod reflash package",
                    "package" : G.lan == "cn"?"ASVAPE_200W.bin":"ASVAPE_200W.bin",
                    "download" : G.lan == "cn"?"http://asvape.net/static/files/ASVAPE_200W.bin":"http://asvape.net/static/files/ASVAPE_200W.bin"
                },
                {
                    "release_date" : "2017.06.28",
                    "description" : G.lan == "cn" ? "ASVAPE 200W芯片升级工具" : "Michael mod reflash Tool",
                    "package" : G.lan == "cn"?"VO200_Update_Tool.exe":"VO200_Update_Tool.exe",
                    "download" : G.lan == "cn"?"http://asvape.net/static/files/VO200_Update_Tool.exe":"http://asvape.net/static/files/VO200_Update_Tool.exe"
                },
                {
                    "release_date" : "2017.02.23",
                    "description" : G.lan == "cn" ? "ASVAPE STRIDER固件升级教程" : "ASVAPE STRIDER firmware update guide",
                    "package" : G.lan == "cn"?"ASVAPE STRIDER固件升级教程.pdf":"ASVAPE STRIDER firmware update guide.pdf",
                    "download" : G.lan == "cn"?"http://asvape.net/static/files/ASVAPE STRIDER固件升级教程.pdf":"http://asvape.net/static/files/ASVAPE STRIDER firmware update guide.pdf"
                },
                {
                    "release_date" : "2017.02.14",
                    "description" : G.lan == "cn" ? "软件包升级工具" : "Strider upgrade tool",
                    "package" : "VO EDITOR.exe",
                    "download" : "http://asvape.net/static/files/VO EDITOR.exe"
                },
                {
                    "release_date" : "2017.02.14",
                    "description" : G.lan == "cn" ? "挺进者80w降级到75w的安装包" : "Strider downgrade package for 80w to 75w",
                    "package" : "VOCHIP_ASVAPE_75W_20170214_V1.bin",
                    "download" : "http://asvape.net/static/files/VOCHIP_ASVAPE_75W_20170214_V1.bin"
                },
                {
                    "release_date" : "2017.02.14",
                    "description" : G.lan == "cn" ? "挺进者75w升级到80w的安装包" : "Strider upgrade package for 75w to 80w",
                    "package" : "VOCHIP_ASVAPE_80W_20170214_V1.bin",
                    "download" : "http://asvape.net/static/files/VOCHIP_ASVAPE_80W_20170214_V1.bin"
                }
            ];
    
            return {
                download_list: download_list
            }
        }
    }

    root.trans = trans;
    return trans;
})