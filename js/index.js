/**
 * Created by LiuYuTao on 2017/8/30.
 */
$(function () {
    var server = "";    //http://192.168.1.142:18080
    var config = {
        api: {
            getPicList: server + "/services/knowledge/comm/data/materiel/getMapList",
            save: server + "/services/knowledge/customer/answer/create",
            getUser: server + "/services/knowledge/customer/baseinfo/getMapList"
        },
        title: "医学名词测验",
        frontMap: {
            leftNum: 13,
            questInputNum: 20,
            img: {
                src: "muscle-front-no-text.png",
                width: 625,
                height: 758
            },
            positions: [{
                index: 1,
                title: "枕额肌额腹",
                x: 59,
                y: 46
            }, {
                index: 2,
                title: "颞顶肌",
                x: 94,
                y: 64
            }, {
                index: 3,
                title: "颞肌",
                x: 112,
                y: 79
            }, {
                index: 4,
                title: "胸锁乳突肌",
                x: 59,
                y: 117
            }, {
                index: 5,
                title: "腹直肌",
                x: 95,
                y: 175
            }, {
                index: 6,
                title: "腹外斜肌",
                x: 77,
                y: 203
            }, {
                index: 7,
                title: "白线",
                x: 113,
                y: 308
            }, {
                index: 8,
                title: "屈肌支持带",
                x: 15,
                y: 360
            }, {
                index: 9,
                title: "髂胫束",
                x: 120,
                y: 449
            }, {
                index: 10,
                title: "髌骨",
                x: 139,
                y: 493
            }, {
                index: 11,
                title: "胫骨",
                x: 139,
                y: 538
            }, {
                index: 12,
                title: "伸肌上支持带",
                x: 69,
                y: 625
            }, {
                index: 13,
                title: "伸肌下支持带",
                x: 69,
                y: 641
            }, {
                index: 14,
                title: "斜方肌",
                x: 470,
                y: 64
            }, {
                index: 15,
                title: "锁骨",
                x: 377,
                y: 89
            }, {
                index: 16,
                title: "胸骨",
                x: 376,
                y: 112
            }, {
                index: 17,
                title: "三角肌",
                x: 470,
                y: 96
            }, {
                index: 18,
                title: "胸大肌",
                x: 470,
                y: 119
            }, {
                index: 19,
                title: "背阔肌",
                x: 470,
                y: 139
            }, {
                index: 20,
                title: "前锯肌",
                x: 470,
                y: 154
            }, {
                index: 21,
                title: "肱二头肌",
                x: 470,
                y: 172
            }, {
                index: 22,
                title: "肱三头肌",
                x: 470,
                y: 195
            }, {
                index: 23,
                title: "肱肌",
                x: 470,
                y: 212
            }, {
                index: 24,
                title: "旋前圆肌",
                x: 470,
                y: 235
            }, {
                index: 25,
                title: "肱桡肌",
                x: 470,
                y: 252
            }, {
                index: 26,
                title: "桡侧腕长伸肌",
                x: 470,
                y: 272
            }, {
                index: 27,
                title: "桡侧腕短伸肌",
                x: 470,
                y: 287
            }, {
                index: 28,
                title: "掌长肌",
                x: 470,
                y: 314
            }, {
                index: 29,
                title: "桡侧腕屈肌",
                x: 470,
                y: 332
            }, {
                index: 30,
                title: "指浅屈肌",
                x: 470,
                y: 350
            }, {
                index: 31,
                title: "尺侧腕屈肌",
                x: 470,
                y: 369
            }, {
                index: 32,
                title: "臀中肌",
                x: 470,
                y: 391
            }, {
                index: 34,
                title: "阔筋膜张肌",
                x: 470,
                y: 411
            }, {
                index: 35,
                title: "髂腰肌",
                x: 470,
                y: 431
            }, {
                index: 36,
                title: "耻骨肌",
                x: 470,
                y: 452
            }, {
                index: 37,
                title: "长收肌",
                x: 470,
                y: 471
            }, {
                index: 38,
                title: "股薄肌",
                x: 470,
                y: 492
            }, {
                index: 39,
                title: "缝匠肌",
                x: 470,
                y: 511
            }, {
                index: 40,
                title: "股直肌",
                x: 470,
                y: 535
            }, {
                index: 41,
                title: "股外侧肌",
                x: 470,
                y: 552
            }, {
                index: 42,
                title: "股内侧肌",
                x: 470,
                y: 574
            }, {
                index: 43,
                title: "腓骨长肌",
                x: 470,
                y: 596
            }, {
                index: 44,
                title: "腓肠肌",
                x: 470,
                y: 615
            }, {
                index: 45,
                title: "胫骨前肌",
                x: 470,
                y: 634
            }, {
                index: 46,
                title: "比目鱼肌",
                x: 470,
                y: 648
            }, {
                index: 47,
                title: "趾长伸肌",
                x: 470,
                y: 667
            }, {
                index: 48,
                title: "外踝",
                x: 470,
                y: 699
            }, {
                index: 49,
                title: "内踝",
                x: 470,
                y: 720
            }]
        },
        backMap: {
            leftNum: 4,
            img: {
                src: "muscle-front-no-text.png",
                width: 625,
                height: 758
            },
            questInputNum: 20,
            positions: [{
                index: 1,
                title: "枕额肌额腹",
                x: 23,
                y: 63
            }, {
                index: 2,
                title: "胸锁乳突肌",
                x: 26,
                y: 90
            }, {
                index: 3,
                title: "腹外斜肌",
                x: 39,
                y: 142
            }, {
                index: 4,
                title: "髂胫束",
                x: 58,
                y: 457
            }, {
                index: 5,
                title: "斜方肌",
                x: 442,
                y: 92
            }, {
                index: 6,
                title: "三角肌",
                x: 442,
                y: 115
            }, {
                index: 7,
                title: "冈下肌",
                x: 442,
                y: 141
            }, {
                index: 8,
                title: "小圆肌",
                x: 442,
                y: 159
            }, {
                index: 9,
                title: "大圆肌",
                x: 442,
                y: 181
            }, {
                index: 10,
                title: "菱形肌",
                x: 442,
                y: 195
            }, {
                index: 11,
                title: "肱三头肌(长头)",
                x: 442,
                y: 213
            }, {
                index: 12,
                title: "肱三头肌(短头)",
                x: 442,
                y: 235
            }, {
                index: 13,
                title: "背阔肌",
                x: 442,
                y: 253
            }, {
                index: 14,
                title: "肱桡肌",
                x: 442,
                y: 270
            }, {
                index: 15,
                title: "桡侧腕长伸肌",
                x: 442,
                y: 288
            }, {
                index: 16,
                title: "肘肌",
                x: 442,
                y: 304
            }, {
                index: 17,
                title: "尺侧腕屈肌",
                x: 442,
                y: 322
            }, {
                index: 18,
                title: "指伸肌",
                x: 442,
                y: 341
            }, {
                index: 19,
                title: "尺侧腕屈肌",
                x: 442,
                y: 358
            }, {
                index: 20,
                title: "阔筋膜张肌",
                x: 442,
                y: 378
            }, {
                index: 21,
                title: "臀中肌",
                x: 442,
                y: 397
            }, {
                index: 22,
                title: "臀大肌",
                x: 442,
                y: 415
            }, {
                index: 23,
                title: "大收肌",
                x: 442,
                y: 431
            }, {
                index: 24,
                title: "半腱肌",
                x: 442,
                y: 448
            }, {
                index: 25,
                title: "半膜肌",
                x: 442,
                y: 464
            }, {
                index: 26,
                title: "股薄肌",
                x: 442,
                y: 484
            }, {
                index: 27,
                title: "股二头肌",
                x: 442,
                y: 502
            }, {
                index: 28,
                title: "缝匠肌",
                x: 442,
                y: 523
            }, {
                index: 29,
                title: "跖肌",
                x: 442,
                y: 542
            }, {
                index: 30,
                title: "腓肠肌",
                x: 442,
                y: 558
            }, {
                index: 31,
                title: "比目鱼肌",
                x: 442,
                y: 585
            }, {
                index: 32,
                title: "跟腱",
                x: 442,
                y: 675
            }, {
                index: 33,
                title: "跟骨",
                x: 442,
                y: 699
            }]
        },
        boneMap: {
            leftNum: 4,
            img: {
                src: "pic3-clear-copy-small.png",
                width: 625,
                height: 758
            },
            positions: [{
                index: 1,
                title: "额骨",
                x: 118,
                y: 210
            }, {
                index: 2,
                title: "面颅骨",
                x: 124,
                y: 250
            }, {
                index: 3,
                title: "颅骨",
                x: 83,
                y: 224
            }, {
                index: 4,
                title: "舌骨",
                x: 109,
                y: 283
            }, {
                index: 5,
                title: "椎骨",
                x: 93,
                y: 429
            }, {
                index: 6,
                title: "髋骨",
                x: 89,
                y: 465
            }, {
                index: 7,
                title: "下颌骨",
                x: 271,
                y: 270
            }, {
                index: 8,
                title: "锁骨",
                x: 352,
                y: 292
            }, {
                index: 9,
                title: "肩胛骨",
                x: 358,
                y: 316
            }, {
                index: 10,
                title: "胸骨",
                x: 351,
                y: 366
            }, {
                index: 11,
                title: "肋骨",
                x: 348,
                y: 382
            }, {
                index: 12,
                title: "肱骨",
                x: 350,
                y: 431
            }, {
                index: 13,
                title: "尺骨",
                x: 350,
                y: 454
            }, {
                index: 14,
                title: "桡骨",
                x: 350,
                y: 473
            }, {
                index: 15,
                title: "腕骨",
                x: 358,
                y: 528
            }, {
                index: 16,
                title: "掌骨",
                x: 291,
                y: 636
            }, {
                index: 17,
                title: "指骨",
                x: 391,
                y: 641
            }, {
                index: 18,
                title: "股骨",
                x: 360,
                y: 678
            }, {
                index: 19,
                title: "髌骨",
                x: 360,
                y: 702
            }, {
                index: 20,
                title: "胫骨",
                x: 361,
                y: 716
            }, {
                index: 21,
                title: "腓骨",
                x: 360,
                y: 737
            }, {
                index: 22,
                title: "跖骨",
                x: 291,
                y: 853
            }, {
                index: 23,
                title: "趾骨",
                x: 295,
                y: 868
            }, {
                index: 24,
                title: "椎骨",
                x: 635,
                y: 410
            }, {
                index: 25,
                title: "髋骨",
                x: 643,
                y: 456
            }, {
                index: 26,
                title: "顶骨",
                x: 647,
                y: 183
            }, {
                index: 27,
                title: "颞骨",
                x: 635,
                y: 223
            }, {
                index: 28,
                title: "枕骨",
                x: 637,
                y: 248
            }, {
                index: 29,
                title: "下颌头",
                x: 644,
                y: 291
            }, {
                index: 30,
                title: "外耳门",
                x: 666,
                y: 314
            }, {
                index: 31,
                title: "颧突",
                x: 778,
                y: 353
            }, {
                index: 32,
                title: "颧弓",
                x: 793,
                y: 382
            }, {
                index: 33,
                title: "人字缝",
                x: 780,
                y: 123
            }, {
                index: 34,
                title: "额骨",
                x: 880,
                y: 160
            }, {
                index: 35,
                title: "眶上孔",
                x: 897,
                y: 207
            }, {
                index: 36,
                title: "蝶骨",
                x: 900,
                y: 238
            }, {
                index: 37,
                title: "鼻骨",
                x: 918,
                y: 243
            }, {
                index: 38,
                title: "眶下孔",
                x: 909,
                y: 282
            }, {
                index: 39,
                title: "颧骨",
                x: 922,
                y: 294
            }, {
                index: 40,
                title: "上颌骨",
                x: 919,
                y: 316
            }, {
                index: 41,
                title: "冠突",
                x: 922,
                y: 344
            }, {
                index: 42,
                title: "下颌骨",
                x: 914,
                y: 363
            }, {
                index: 43,
                title: "颏孔",
                x: 917,
                y: 381
            }, {
                index: 44,
                title: "颈椎",
                x: 703,
                y: 443
            }, {
                index: 45,
                title: "胸椎",
                x: 701,
                y: 582
            }, {
                index: 46,
                title: "腰椎",
                x: 701,
                y: 764
            }, {
                index: 47,
                title: "骶部",
                x: 701,
                y: 889
            }, {
                index: 48,
                title: "颈曲",
                x: 740,
                y: 444
            }, {
                index: 49,
                title: "腰曲",
                x: 740,
                y: 755
            }, {
                index: 50,
                title: "寰椎",
                x: 809,
                y: 400
            }, {
                index: 51,
                title: "枢椎",
                x: 818,
                y: 433
            }, {
                index: 52,
                title: "隆椎",
                x: 819,
                y: 470
            }, {
                index: 53,
                title: "第一胸椎",
                x: 832,
                y: 488
            }, {
                index: 54,
                title: "胸曲",
                x: 862,
                y: 592
            }, {
                index: 55,
                title: "椎间盘",
                x: 852,
                y: 647
            }, {
                index: 56,
                title: "椎间孔",
                x: 843,
                y: 692
            }, {
                index: 57,
                title: "第一腰椎",
                x: 836,
                y: 738
            }, {
                index: 58,
                title: "横突",
                x: 823,
                y: 760
            }, {
                index: 59,
                title: "棘突",
                x: 826,
                y: 780
            }, {
                index: 60,
                title: "骶骨",
                x: 861,
                y: 861
            }, {
                index: 61,
                title: "骶曲",
                x: 821,
                y: 870
            }, {
                index: 62,
                title: "尾骨",
                x: 840,
                y: 919
            }, {
                index: 63,
                title: "骨松质",
                x: 302,
                y: 1020
            }, {
                index: 64,
                title: "骨膜",
                x: 208,
                y: 1097
            }, {
                index: 65,
                title: "骨髓腔",
                x: 300,
                y: 1131
            }, {
                index: 66,
                title: "骨髓",
                x: 300,
                y: 1170
            }, {
                index: 67,
                title: "骨密质",
                x: 300,
                y: 1209
            }, {
                index: 68,
                title: "关节腔",
                x: 391,
                y: 1092
            }, {
                index: 69,
                title: "关节软骨",
                x: 398,
                y: 1123
            }, {
                index: 70,
                title: "韧带",
                x: 427,
                y: 1220
            }, {
                index: 71,
                title: "骨",
                x: 541,
                y: 1001
            }, {
                index: 72,
                title: "血管",
                x: 574,
                y: 1046
            }, {
                index: 73,
                title: "神经",
                x: 584,
                y: 1071
            }, {
                index: 74,
                title: "滑膜层",
                x: 575,
                y: 1090
            }, {
                index: 75,
                title: "关节囊",
                x: 583,
                y: 1115
            }, {
                index: 76,
                title: "纤维层",
                x: 548,
                y: 1206
            }, {
                index: 77,
                title: "骨",
                x: 486,
                y: 1246
            }, {
                index: 78,
                title: "胫骨",
                x: 819,
                y: 1049
            }, {
                index: 79,
                title: "距骨",
                x: 826,
                y: 1077
            }, {
                index: 80,
                title: "足舟骨",
                x: 805,
                y: 1091
            }, {
                index: 81,
                title: "楔骨",
                x: 766,
                y: 1098
            }, {
                index: 82,
                title: "腓骨",
                x: 911,
                y: 1060
            }, {
                index: 83,
                title: "跟骨",
                x: 932,
                y: 1176
            }, {
                index: 84,
                title: "足弓",
                x: 781,
                y: 1208
            }],
            questInputNum: 30
        }
    };

    var controller = {
        init: function () {
            var t = this;
            t.showAll();// TODO: delete this
            $("title").text(config.title);
            $("#title").text(config.title);
            t.bindStartButton();
            t.initUser();
        },
        initData: function () {

        },
        initUser: function () {
            var t = this;

            $.ajax({
                url: config.api.getUser,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data && data.responseData && data.responseData.dataList) {
                        var users = data.responseData.dataList;
                        var departs = $.map(users, function (d) {
                            return {departmentName: d.departmentName, departmentId: d.departmentId};
                        });
                        t.buildSelector(departs, users);
                    }

                }
            })
        },
        /*构建选择器*/
        buildSelector: function (departs, users) {
            var departsHtml = $.map(departs, function (item) {
                return '<a class="dropdown-item" href="#" departmentId=' + item.departmentId + '>' + item.departmentName + '</a>';
            });
            var usersHtml = $.map(users, function (item) {
                return '<a class="dropdown-item" href="#"  departmentId=' + item.departmentId + '>' + item.customerName + '</a>';
            });
            $("#departs").html(departsHtml.join());
            $("#users").html(usersHtml.join());

            $("#departs a").on("click", function (e) {
                var departmentId = $(this).attr("departmentId");
                $("#departSelect").text($(this).text());
                $("#users a").hide();
                $("#users a[departmentId=" + departmentId + "]").show();
            });
            $("#users a").on("click", function (e) {
                $("#userSelect").text($(this).text());
            })
        },
        bindStartButton: function () {
            var t = this;

            $("#startAnswer").on("click", function () {
                t.picIndex = 1;
                t.startAnswer();
                $(this).hide();
                $("#next").show();
                $("#submit").show();
                t.bindSubmit();
                t.bindNext();
                t.bindPrev();
            });
        },
        bindPrev: function () {
            var t = this;
            $("#prev").on("click", function () {
                if (t.picIndex > 1) {
                    t.picIndex--;
                    if (t.picIndex == 1) {
                        $("#prev").show();
                    }

                    t.show(t.picIndex);
                }
            });
        },
        bindNext: function () {
            var t = this;

            $("#next").on("click", function () {
                if(t.picIndex<3){
                    t.picIndex++;
                    if (t.picIndex > 1) {
                        $("#prev").show();
                    }
                    if (t.picIndex == 3) {
                        $("#prev").show();
                    }
                    t.show(t.picIndex);
                }
            });
        },
        show: function (index) {
            $("div[id^=row]").hide();
            $("#row" + index).show();
        },
        bindSubmit: function () {
            $("#submit").on("click", function (e) {
                var allInputs = $(".answers input");

                var rst = [];
                allInputs.each(function (index, item) {
                    rst.push({materialId: $(item).id, materielName: $(item).title,optionId:$(item).id,optionName:$(item).val()});
                });

                var data ={};
                data.optionJson = rst;
                data.customerId = "test";
                $.ajax({
                    url:config.api.save,
                    type:"post",
                    dataType:"json",
                    data:data,
                    success: function (data) {

                    }
                })
                console.log(rst);
            })
        },
        startAnswer: function () {
            var t = this;
            var randomPositions = t.getRandomPosition();
            t.showSelectedPosition(randomPositions);
            t.createInput(randomPositions);
        },
        getRandomPosition: function () {
            var result = {};

            function getRandomInArray(arr, num) {
                var l = arr.length;
                var rst = [];
                var i = 0;
                var tempArr = [];
                while (i < num) {
                    var obj = {};
                    var index = Math.floor(Math.random() * l);
                    if (tempArr.indexOf(index) < 0) {
                        obj = $.extend(obj, arr[index]);
                        tempArr.push(index);
                        rst.push(obj);
                        i++;
                    }
                }
                return rst;
            }

            result.front = getRandomInArray(config.frontMap.positions, config.frontMap.questInputNum);
            result.back = getRandomInArray(config.backMap.positions, config.backMap.questInputNum);
            result.bone = getRandomInArray(config.boneMap.positions, config.boneMap.questInputNum);

            function sort(a, b) {
                if (a.index < b.index) {
                    return -1
                } else if (a == b) {
                    return 0;
                } else {
                    return 1;
                }
            }

            result.front = result.front.sort(sort);
            result.back = result.back.sort(sort);
            result.bone = result.bone.sort(sort);

            return result;
        },
        showSelectedPosition: function (positions) {
            var t = this;
            t.clear();
            function show(el, arr, type) {
                el.selectAll("text")
                    .data(arr)
                    .enter()
                    .append("text")
                    .attr("class", "text")
                    .attr("x", function (d, i) {
                        var compareIndex;

                        if(type){
                            if (type == "left") {
                                compareIndex = config.frontMap.leftNum;
                            } else {
                                compareIndex = config.backMap.leftNum;
                            }
                            if (d.index <= compareIndex) {
                                return d.x + 30 + d.title.length * 20;
                            } else {
                                return d.x + 50;
                            }
                        }else{
                            return d.x +50;
                        }


                    })
                    .attr("y", function (d, i) {
                        return d.y + 23
                    })
                    .text(function (d, i) {
                        return (i + 1) //+ "_" + d.title ;
                    })
                    .attr("title", function (d) {
                        return d.title
                    })
            }

            show(d3.select("#frontSVG"), positions.front, "left");
            show(d3.select("#backSVG"), positions.back, "right");
            show(d3.select("#boneSVG"), positions.bone);
        },
        clear: function () {
            d3.selectAll("text.text").remove();
        },
        createInput: function (randompositions) {
            var t = this;

            function createInput(el, arr) {
                var ul = $(el).find(".row");
                for (var i = 0, l = arr.length; i < l; i++) {
                    ul.append("<div class='col-lg-1 text-align-right index'>" + (i + 1) + "</div>" +
                        "<div class='col-lg-3 '><Input index='" + arr[i].index + "' questIndex='" + (i + 1) + "' style='width:80px;' /></div>");
                }
            }

            createInput($("#answer1"), randompositions.front);
            createInput($("#answer2"), randompositions.back);
            createInput($("#answer3"), randompositions.bone);
        },
        showAll: function () {
            var t = this;
            $("div[id^=row]").show();
            function show(el, arr) {
                el.selectAll("text")
                    .data(arr)
                    .enter()
                    .append("text")
                    .attr("class", "text")
                    .attr("x", function (d) {
                        return d.x + 50
                    })
                    .attr("y", function (d) {
                        return d.y + 23
                    })
                    .text(function (d, i) {
                        return d.title;
                    })
            }

            show(d3.select("#leftSVG"), config.frontMap.positions);
            show(d3.select("#rightSVG"), config.backMap.positions);
            show(d3.select("#boneSVG"), config.boneMap.positions);
        }
    };

    var timer = {};

    controller.init();
});