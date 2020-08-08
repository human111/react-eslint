export const testData1 = {
  id: 61,
  info: {
    note: 'https://km.sankuai.com/page/129394723',
    portlets: [
      {
        id: 616,
        type: 'portlet',
        portlet: [
          {
            id: 6161,
            SQL: [
              {
                dt:
                  'select count(distinct home_page_uuid) as home_page_uv,count(distinct arrange_ord_uuid) as arr_ord_uv,case when count(distinct home_page_uuid)=0 then 0.0 else cast(count(distinct arrange_ord_uuid) as double)/cast (count(distinct home_page_uuid) as double) end as visit_rate, count(distinct ingredients_expose_uuid) as ingre_expose_uv, count(distinct ingredients_arr_ord_uuid) as ingre_arr_ord_uv,case when count(distinct ingredients_expose_uuid)=0 then 0.0 else cast(count(distinct ingredients_arr_ord_uuid) as double)/cast(count(distinct ingredients_expose_uuid) as double) end as ingre_visit_rate,case when sum(arrange_ord_cnt) is null then 0 else sum(arrange_ord_cnt) end as arr_ord_cnt,case when sum(original_price) is null then 0 else sum(original_price) end as org_amt,case when sum(actual_price) is null then 0 else sum(actual_price) end  as actual_amt from mart_lingshou.app_flow_sdk_aoi_poi_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$',
                wk:
                  ' select avg(home_page_uv) as home_page_uv,avg(arr_ord_uv) as arr_ord_uv,case when avg(home_page_uv)=0 then 0.0 else cast(avg(arr_ord_uv) as double)/cast (avg(home_page_uv) as double)  end as visit_rate, avg(ingre_expose_uv) as ingre_expose_uv,avg(ingre_arr_ord_uv) as ingre_arr_ord_uv,case when avg(ingre_expose_uv)=0 then 0.0 else cast(avg(ingre_arr_ord_uv) as double)/cast(avg(ingre_expose_uv) as double) end as ingre_visit_rate,  avg(arr_ord_cnt) as arr_ord_cnt, avg(org_amt) as org_amt, avg(actual_amt) as actual_amt from ( select dt, count(distinct home_page_uuid) as home_page_uv, count(distinct arrange_ord_uuid) as arr_ord_uv, count(distinct ingredients_expose_uuid) as ingre_expose_uv, count(distinct ingredients_arr_ord_uuid) as ingre_arr_ord_uv, case when sum(arrange_ord_cnt) is null then 0 else sum(arrange_ord_cnt) end as arr_ord_cnt,case when sum(original_price) is null then 0 else sum(original_price) end as org_amt,case when sum(actual_price) is null then 0 else sum(actual_price) end  as actual_amt  from mart_lingshou.app_flow_sdk_aoi_poi_dd  where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$ group by dt )'
              }
            ],
            deps: [
              {
                name: 611,
                required: true
              },
              {
                name: 612,
                required: true
              },
              {
                name: 613,
                required: true
              },
              {
                name: 6101,
                required: true
              },
              {
                name: 6102,
                required: true
              },
              {
                name: 6103,
                required: true
              },
              {
                name: 6104,
                required: true
              },
              {
                name: 61711,
                required: false
              },
              {
                name: 6105,
                required: true
              }
            ],
            head: [
              {
                code: 'home_page_uv',
                info:
                  '统计日期内，商家主页或商品通过某个流量入口在用户端成功展示的人数总和（按设备号union_id整体去重）；在本产品中进店人数包括了没有进店记录（流量日志记录会有轻微丢失）但是在门店主页有浏览商品行为或者产生了订单的用户。',
                name: '进店人数',
                category: 0
              },
              {
                code: 'arr_ord_uv',
                info:
                  '统计日期内，用户通过某个流量入口成功提交订单且截止当天23:59:59订单未取消的人数总和（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '订单人数（流量）',
                category: 0
              },
              {
                code: 'visit_rate',
                info: '订单人数（流量）/进店人数',
                name: '访购率',
                category: 0
              },
              {
                code: 'arr_ord_cnt',
                info: '',
                name: '订单数',
                category: 1
              },
              {
                code: 'org_amt',
                info: '',
                name: '原价交易额',
                category: 1
              },
              {
                code: 'actual_amt',
                info: '',
                name: '实付交易额',
                category: 1
              },
              {
                code: 'ingre_expose_uv',
                info:
                  '统计日期内，商品二级类目为食材的所有商品的曝光人数总和（按设备号union_id整体去重）；食材类目商品取算法侧计算出来的商品类目表中商品二级类目为食材类目的所有商品；食材类目：1）一级类目“生鲜果蔬”下的4个二级类目：水产海鲜、肉类、蔬菜、蛋品；2）一级类目“粮油调味”下的8个二级类目：农产品干货、干面条、杂粮米类、杂粮豆类、水产干货、烹饪油、米、面粉',
                name: '食材商品曝光人数',
                category: 2
              },
              {
                code: 'ingre_arr_ord_uv',
                info:
                  '统计日期内，商品二级类目为食材的所有商品的订单人数总和（按设备号union_id整体去重）；食材类目商品取算法侧计算出来的商品类目表中商品二级类目为食材类目的所有商品；食材类目：1）一级类目“生鲜果蔬”下的4个二级类目：水产海鲜、肉类、蔬菜、蛋品；2）一级类目“粮油调味”下的8个二级类目：农产品干货、干面条、杂粮米类、杂粮豆类、水产干货、烹饪油、米、面粉',
                name: '食材商品订单人数',
                category: 2
              },
              {
                code: 'ingre_visit_rate',
                info: '食材商品订单人数/食材商品曝光人数',
                name: '食材商品访购率',
                category: 2
              }
            ],
            title: '日均',
            action: '/api/v1/activity/portlet/query',
            MEASURES: [
              {
                code: 'home_page_uv',
                name: '进店人数',
                type: '0',
                precision: ',###',
                expression: 'home_page_uv'
              },
              {
                code: 'arrange_ord_uv',
                name: '订单人数（流量）',
                type: '0',
                precision: ',###',
                expression: 'arrange_ord_uv'
              },
              {
                code: 'visit_rate',
                name: '进店访购率（流量）',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when home_page_uv=0 then 0.0 else cast(arrange_ord_uv as double)/cast (home_page_uv as double) end'
              },
              {
                code: 'ingre_expose_uv',
                name: '食材商品曝光人数',
                type: '0',
                precision: ',###',
                expression: 'ingre_expose_uv'
              },
              {
                code: 'ingre_arr_ord_uv',
                name: '食材商品订单人数',
                type: '0',
                precision: ',###',
                expression: 'ingre_arr_ord_uv'
              },
              {
                code: 'ingre_visit_rate',
                name: '食材商品访购率',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when ingre_expose_uv=0 then 0.0 else cast(ingre_arr_ord_uv as double)/cast(ingre_expose_uv as double) end'
              },
              {
                code: 'arr_ord_cnt',
                name: '订单数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_cnt'
              },
              {
                code: 'org_amt',
                name: '原价交易额',
                type: '0',
                precision: ',###',
                expression: 'org_amt'
              },
              {
                code: 'actual_amt',
                name: '实付交易额',
                type: '0',
                precision: ',###',
                expression: 'actual_amt'
              }
            ],
            component: 'category-summary-panel',
            TABLE_NAME: 'mart_lingshou.app_prod_prodsal_city_sd',
            MEASURES_BASIC: ''
          }
        ],
        component: 'layout-portlet'
      },
      {
        id: 617,
        type: 'portlet',
        title: '用户访问门店明细',
        portlet: [
          {
            id: 6171,
            SQL: [
              {
                dt:
                  'select count(0) as TOTAL from  (select  $DIMENSIONS$,poi_id,poi_name   from (select $DIMENSIONS$ ,poi_id,poi_name from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP$ ,poi_id,poi_name union all  select $DIMENSIONS$,poi_id,poi_name from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP$,poi_id,poi_name) t0 $DIMENSION_GROUP$,poi_id,poi_name) t1 where 1=1 $DIMENSION_SEARCH$ @select max(home_page_uv) as home_page_uv_max,min(home_page_uv) as home_page_uv_min,max(arrange_ord_uv) as arrange_ord_uv_max,min(arrange_ord_uv) as arrange_ord_uv_min,max(vege_expose_uv) as vege_expose_uv_max,min(vege_expose_uv) as vege_expose_uv_min,max(vege_arr_ord_uv) as vege_arr_ord_uv_max,min(vege_arr_ord_uv) as vege_arr_ord_uv_min,max(arr_ord_cnt) as arr_ord_cnt_max,min(arr_ord_cnt) as arr_ord_cnt_min,max(original_price) as original_price_max,min(original_price) as original_price_min,max(actual_price) as actual_price_max,min(actual_price) as actual_price_min,max(first_poi_ord_uv) as first_poi_ord_uv_max,min(first_poi_ord_uv) as first_poi_ord_uv_min,max(case when arr_ord_cnt=0 then 0.0 else cast(original_price as double)/cast(arr_ord_cnt as double) end) as org_price_per_ord_max,min(case when arr_ord_cnt=0 then 0.0 else cast(original_price as double)/cast(arr_ord_cnt as double) end) as org_price_per_ord_min,max(case when arr_ord_cnt=0 then 0 else cast(actual_price as double)/cast(arr_ord_cnt as double) end) as actual_price_per_ord_max,min(case when arr_ord_cnt=0 then 0 else cast(actual_price as double)/cast(arr_ord_cnt as double) end) as actual_price_per_ord_min,max(ingre_expose_uv) as ingre_expose_uv_max,min(ingre_expose_uv) as ingre_expose_uv_min,max(ingre_arr_ord_uv) as ingre_arr_ord_uv_max,min(ingre_arr_ord_uv) as ingre_arr_ord_uv_min,max(expose_sku_uv) as expose_sku_uv_max,min(expose_sku_uv) as expose_sku_uv_min,max(arr_ord_sku_uv) as arr_ord_sku_uv_max,min(arr_ord_sku_uv) as arr_ord_sku_uv_min from (select $DIMENSIONS_COMBINATION$ poi_id,poi_name, sum(home_page_uv) as home_page_uv,sum(cart_uv) as cart_uv,sum(submit_page_uv) as submit_page_uv,sum(submit_ord_uv) as submit_ord_uv,sum(push_ord_uv) as push_ord_uv,sum(arrange_ord_uv) as arrange_ord_uv,sum(vege_expose_uv) as vege_expose_uv,sum(vege_arr_ord_uv) as vege_arr_ord_uv,sum(ingre_expose_uv) as ingre_expose_uv,sum(ingre_arr_ord_uv) as ingre_arr_ord_uv,sum(arr_ord_cnt) as arr_ord_cnt,sum(original_price) as original_price,sum(actual_price) as actual_price,sum(first_poi_ord_uv) as first_poi_ord_uv,sum(first_cat_ord_uv) as first_cat_ord_uv,sum(first_sg_ord_uv) as first_sg_ord_uv,sum(expose_sku_uv) as expose_sku_uv,sum(cart_sku_uv) as cart_sku_uv,sum(submit_ord_sku_uv) as submit_ord_sku_uv,sum(push_ord_sku_uv) as push_ord_sku_uv,sum(arr_ord_sku_uv) as arr_ord_sku_uv  from (select $DIMENSIONS_COMBINATION$ poi_id,poi_name, count(distinct home_page_uuid) AS home_page_uv,count(distinct cart_uuid) AS cart_uv,count(distinct submit_page_uuid) AS submit_page_uv,count(distinct submit_ord_uuid) AS submit_ord_uv,count(distinct push_ord_uuid) AS push_ord_uv,count(distinct arrange_ord_uuid) AS arrange_ord_uv,count(distinct vegetable_expose_uuid) AS vege_expose_uv,count(distinct vegetable_arr_ord_uuid) AS vege_arr_ord_uv,count(distinct ingredients_expose_uuid) AS ingre_expose_uv,count(distinct ingredients_arr_ord_uuid) AS ingre_arr_ord_uv,cast(sum(arrange_ord_cnt) as integer) as arr_ord_cnt,sum(original_price) AS original_price,sum(actual_price) AS actual_price,count(distinct first_poi_ord_uuid) AS first_poi_ord_uv,count(distinct first_category_ord_uuid) AS first_cat_ord_uv,count(distinct first_sg_ord_uuid) AS first_sg_ord_uv,0 as expose_sku_uv ,0 as cart_sku_uv,0 as submit_ord_sku_uv, 0 as push_ord_sku_uv,0 as arr_ord_sku_uv from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$ ,poi_id,poi_name union all  select $DIMENSIONS_COMBINATION$ poi_id,poi_name,  0 as  home_page_uv, 0 as  cart_uv,0 as  submit_page_uv,0 as  submit_ord_uv,0 as  push_ord_uv,0 as  arrange_ord_uv,0 as  vege_expose_uv,0 as  vege_arr_ord_uv,0 as  ingre_expose_uv,0 as  ingre_arr_ord_uv,cast(0 as integer) as arr_ord_cnt,cast(0.0 as double) as original_price,cast(0.0 as double) as actual_price,0 as  first_poi_ord_uv,0 as  first_cat_ord_uv,0 as  first_sg_ord_uv,count(distinct expose_sku) as expose_sku_uv, count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as submit_ord_sku_uv, count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$ ,poi_id,poi_name) t0 $DIMENSION_GROUP_COMBINATION$ ,poi_id,poi_name) t1 where 1=1 $DIMENSION_SEARCH$ @select $DIMENSIONS_COMBINATION$ $MEASURES$,poi_id,poi_name from (select $DIMENSIONS_COMBINATION$ poi_id,poi_name, sum(home_page_uv) as home_page_uv,sum(cart_uv) as cart_uv,sum(submit_page_uv) as submit_page_uv,sum(submit_ord_uv) as submit_ord_uv,sum(push_ord_uv) as push_ord_uv,sum(arrange_ord_uv) as arrange_ord_uv,sum(vege_expose_uv) as vege_expose_uv,sum(vege_arr_ord_uv) as vege_arr_ord_uv,sum(ingre_expose_uv) as ingre_expose_uv,sum(ingre_arr_ord_uv) as ingre_arr_ord_uv,sum(arr_ord_cnt) as arr_ord_cnt,sum(original_price) as original_price,sum(actual_price) as actual_price,sum(first_poi_ord_uv) as first_poi_ord_uv,sum(first_cat_ord_uv) as first_cat_ord_uv,sum(first_sg_ord_uv) as first_sg_ord_uv,sum(expose_sku_uv) as expose_sku_uv,sum(cart_sku_uv) as cart_sku_uv,sum(submit_ord_sku_uv) as submit_ord_sku_uv,sum(push_ord_sku_uv) as push_ord_sku_uv,sum(arr_ord_sku_uv) as arr_ord_sku_uv  from (select $DIMENSIONS_COMBINATION$ poi_id,poi_name, count(distinct home_page_uuid) AS home_page_uv,count(distinct cart_uuid) AS cart_uv,count(distinct submit_page_uuid) AS submit_page_uv,count(distinct submit_ord_uuid) AS submit_ord_uv,count(distinct push_ord_uuid) AS push_ord_uv,count(distinct arrange_ord_uuid) AS arrange_ord_uv,count(distinct vegetable_expose_uuid) AS vege_expose_uv,count(distinct vegetable_arr_ord_uuid) AS vege_arr_ord_uv,count(distinct ingredients_expose_uuid) AS ingre_expose_uv,count(distinct ingredients_arr_ord_uuid) AS ingre_arr_ord_uv,cast(sum(arrange_ord_cnt) as integer) as arr_ord_cnt,sum(original_price) AS original_price,sum(actual_price) AS actual_price,count(distinct first_poi_ord_uuid) AS first_poi_ord_uv,count(distinct first_category_ord_uuid) AS first_cat_ord_uv,count(distinct first_sg_ord_uuid) AS first_sg_ord_uv,0 as expose_sku_uv ,0 as cart_sku_uv,0 as submit_ord_sku_uv, 0 as push_ord_sku_uv,0 as arr_ord_sku_uv from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$ ,poi_id,poi_name union all  select $DIMENSIONS_COMBINATION$ poi_id,poi_name, 0 as  home_page_uv, 0 as  cart_uv,0 as  submit_page_uv,0 as  submit_ord_uv,0 as  push_ord_uv,0 as  arrange_ord_uv,0 as  vege_expose_uv,0 as  vege_arr_ord_uv,0 as  ingre_expose_uv,0 as  ingre_arr_ord_uv,cast(0 as integer) as arr_ord_cnt,cast(0.0 as double) as original_price,cast(0.0 as double) as actual_price,0 as  first_poi_ord_uv,0 as  first_cat_ord_uv,0 as  first_sg_ord_uv,count(distinct expose_sku) as expose_sku_uv, count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as submit_ord_sku_uv, count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$,poi_id,poi_name) t0 $DIMENSION_GROUP_COMBINATION$ ,poi_id,poi_name) t1 where 1=1 $DIMENSION_SEARCH$ $DIMENSION_SORT$ $PAGINATION$ ',
                wk:
                  'select count(0) as TOTAL from (select $DIMENSIONS$,poi_id,poi_name  from (select $DIMENSIONS$, dt ,poi_id,poi_name from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP$, dt,poi_id,poi_name union all  select $DIMENSIONS$, dt,poi_id,poi_name from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP$, dt,poi_id,poi_name ) t0 $DIMENSION_GROUP$ ,poi_id,poi_name) t1 where 1=1 $DIMENSION_SEARCH$ @select max(home_page_uv) as home_page_uv_max,min(home_page_uv) as home_page_uv_min,max(arrange_ord_uv) as arrange_ord_uv_max,min(arrange_ord_uv) as arrange_ord_uv_min,max(vege_expose_uv) as vege_expose_uv_max,min(vege_expose_uv) as vege_expose_uv_min,max(vege_arr_ord_uv) as vege_arr_ord_uv_max,min(vege_arr_ord_uv) as vege_arr_ord_uv_min,max(arr_ord_cnt) as arr_ord_cnt_max,min(arr_ord_cnt) as arr_ord_cnt_min,max(original_price) as original_price_max,min(original_price) as original_price_min,max(actual_price) as actual_price_max,min(actual_price) as actual_price_min,max(first_poi_ord_uv) as first_poi_ord_uv_max,min(first_poi_ord_uv) as first_poi_ord_uv_min,max(case when arr_ord_cnt=0 then 0.0 else cast(original_price as double)/cast(arr_ord_cnt as double) end) as org_price_per_ord_max,min(case when arr_ord_cnt=0 then 0.0 else cast(original_price as double)/cast(arr_ord_cnt as double) end) as org_price_per_ord_min,max(case when arr_ord_cnt=0 then 0 else cast(actual_price as double)/cast(arr_ord_cnt as double) end) as actual_price_per_ord_max,min(case when arr_ord_cnt=0 then 0 else cast(actual_price as double)/cast(arr_ord_cnt as double) end) as actual_price_per_ord_min,max(ingre_expose_uv) as ingre_expose_uv_max,min(ingre_expose_uv) as ingre_expose_uv_min,max(ingre_arr_ord_uv) as ingre_arr_ord_uv_max,min(ingre_arr_ord_uv) as ingre_arr_ord_uv_min,max(expose_sku_uv) as expose_sku_uv_max,min(expose_sku_uv) as expose_sku_uv_min,max(arr_ord_sku_uv) as arr_ord_sku_uv_max,min(arr_ord_sku_uv) as arr_ord_sku_uv_min from        (select $DIMENSIONS_COMBINATION$ poi_id,max(poi_name) as poi_name,avg(cast(home_page_uv as double)) as home_page_uv,avg(cast(cart_uv as double)) as cart_uv,avg(cast(submit_page_uv as double)) as submit_page_uv,avg(cast(submit_ord_uv as double)) as submit_ord_uv,avg(cast(push_ord_uv as double)) as push_ord_uv,avg(cast(arrange_ord_uv as double)) as arrange_ord_uv,avg(cast(vege_expose_uv as double)) as vege_expose_uv,avg(cast(vege_arr_ord_uv as double)) as vege_arr_ord_uv,avg(cast(ingre_expose_uv as double)) as ingre_expose_uv,avg(cast(ingre_arr_ord_uv as double)) as ingre_arr_ord_uv,avg(cast(arr_ord_cnt as double)) as arr_ord_cnt,avg(cast(original_price as double)) as original_price,avg(cast(actual_price as double)) as actual_price,avg(cast(first_poi_ord_uv as double)) as first_poi_ord_uv,avg(cast(first_cat_ord_uv as double)) as first_cat_ord_uv,avg(cast(first_sg_ord_uv as double)) as first_sg_ord_uv,avg(cast(expose_sku_uv as double)) as expose_sku_uv,avg(cast(cart_sku_uv as double)) as cart_sku_uv,avg(cast(submit_ord_sku_uv as double)) as submit_ord_sku_uv,avg(cast(push_ord_sku_uv as double)) as push_ord_sku_uv,avg(cast(arr_ord_sku_uv as double)) as arr_ord_sku_uv  from (  select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name ,  sum(home_page_uv) as home_page_uv,  sum(cart_uv) AS cart_uv, sum(submit_page_uv) AS submit_page_uv, sum(submit_ord_uv) AS submit_ord_uv, sum(push_ord_uv) AS push_ord_uv,  sum(arrange_ord_uv) AS arrange_ord_uv,   sum(vege_expose_uv) AS vege_expose_uv,    sum(vege_arr_ord_uv) AS vege_arr_ord_uv,   sum(ingre_expose_uv) AS ingre_expose_uv, sum(ingre_arr_ord_uv) AS ingre_arr_ord_uv,  sum(arr_ord_cnt) as arr_ord_cnt,  sum(original_price) AS original_price, sum(actual_price) AS actual_price,    sum(first_poi_ord_uv) AS first_poi_ord_uv,  sum(first_cat_ord_uv) AS first_cat_ord_uv, sum(first_sg_ord_uv) AS first_sg_ord_uv,   sum(expose_sku_uv) as expose_sku_uv,  sum(cart_sku_uv) as cart_sku_uv,  sum(submit_ord_sku_uv) as submit_ord_sku_uv,  sum(push_ord_sku_uv) as push_ord_sku_uv, sum(arr_ord_sku_uv) as arr_ord_sku_uv  from (select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name,count(distinct home_page_uuid) AS home_page_uv,count(distinct cart_uuid) AS cart_uv,count(distinct submit_page_uuid) AS submit_page_uv,count(distinct submit_ord_uuid) AS submit_ord_uv,count(distinct push_ord_uuid) AS push_ord_uv,count(distinct arrange_ord_uuid) AS arrange_ord_uv,count(distinct vegetable_expose_uuid) AS vege_expose_uv,count(distinct vegetable_arr_ord_uuid) AS vege_arr_ord_uv,count(distinct ingredients_expose_uuid) AS ingre_expose_uv,count(distinct ingredients_arr_ord_uuid) AS ingre_arr_ord_uv,cast(sum(arrange_ord_cnt) as integer) as arr_ord_cnt,sum(original_price) AS original_price,sum(actual_price) AS actual_price,count(distinct first_poi_ord_uuid) AS first_poi_ord_uv,count(distinct first_category_ord_uuid) AS first_cat_ord_uv,count(distinct first_sg_ord_uuid) AS first_sg_ord_uv,0 as expose_sku_uv ,0 as cart_sku_uv,0 as submit_ord_sku_uv, 0 as push_ord_sku_uv,0 as arr_ord_sku_uv from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name union all  select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name,  0 as  home_page_uv, 0 as  cart_uv,0 as  submit_page_uv,0 as  submit_ord_uv,0 as  push_ord_uv,0 as  arrange_ord_uv,0 as  vege_expose_uv,0 as  vege_arr_ord_uv,0 as  ingre_expose_uv,0 as  ingre_arr_ord_uv,cast(0 as integer) as arr_ord_cnt,cast(0.0 as double) as original_price,cast(0.0 as double) as actual_price,0 as  first_poi_ord_uv,0 as  first_cat_ord_uv,0 as  first_sg_ord_uv,count(distinct expose_sku) as expose_sku_uv, count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as submit_ord_sku_uv, count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name ) t0 $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name )$DIMENSION_GROUP_COMBINATION$,poi_id) t1 where 1=1 $DIMENSION_SEARCH$                @select $DIMENSIONS_COMBINATION$ $MEASURES$,poi_id, poi_name from (select $DIMENSIONS_COMBINATION$ poi_id,max(poi_name) as poi_name,avg(cast(home_page_uv as double)) as home_page_uv,avg(cast(cart_uv as double)) as cart_uv,avg(cast(submit_page_uv as double)) as submit_page_uv,avg(cast(submit_ord_uv as double)) as submit_ord_uv,avg(cast(push_ord_uv as double)) as push_ord_uv,avg(cast(arrange_ord_uv as double)) as arrange_ord_uv,avg(cast(vege_expose_uv as double)) as vege_expose_uv,avg(cast(vege_arr_ord_uv as double)) as vege_arr_ord_uv,avg(cast(ingre_expose_uv as double)) as ingre_expose_uv,avg(cast(ingre_arr_ord_uv as double)) as ingre_arr_ord_uv,avg(cast(arr_ord_cnt as double)) as arr_ord_cnt,avg(cast(original_price as double)) as original_price,avg(cast(actual_price as double)) as actual_price,avg(cast(first_poi_ord_uv as double)) as first_poi_ord_uv,avg(cast(first_cat_ord_uv as double)) as first_cat_ord_uv,avg(cast(first_sg_ord_uv as double)) as first_sg_ord_uv,avg(cast(expose_sku_uv as double)) as expose_sku_uv,avg(cast(cart_sku_uv as double)) as cart_sku_uv,avg(cast(submit_ord_sku_uv as double)) as submit_ord_sku_uv,avg(cast(push_ord_sku_uv as double)) as push_ord_sku_uv,avg(cast(arr_ord_sku_uv as double)) as arr_ord_sku_uv  from (  select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name ,  sum(home_page_uv) as home_page_uv,  sum(cart_uv) AS cart_uv, sum(submit_page_uv) AS submit_page_uv, sum(submit_ord_uv) AS submit_ord_uv, sum(push_ord_uv) AS push_ord_uv,  sum(arrange_ord_uv) AS arrange_ord_uv,   sum(vege_expose_uv) AS vege_expose_uv,    sum(vege_arr_ord_uv) AS vege_arr_ord_uv,   sum(ingre_expose_uv) AS ingre_expose_uv, sum(ingre_arr_ord_uv) AS ingre_arr_ord_uv,  sum(arr_ord_cnt) as arr_ord_cnt,  sum(original_price) AS original_price, sum(actual_price) AS actual_price,    sum(first_poi_ord_uv) AS first_poi_ord_uv,  sum(first_cat_ord_uv) AS first_cat_ord_uv, sum(first_sg_ord_uv) AS first_sg_ord_uv,   sum(expose_sku_uv) as expose_sku_uv,  sum(cart_sku_uv) as cart_sku_uv,  sum(submit_ord_sku_uv) as submit_ord_sku_uv,  sum(push_ord_sku_uv) as push_ord_sku_uv, sum(arr_ord_sku_uv) as arr_ord_sku_uv  from (select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name,count(distinct home_page_uuid) AS home_page_uv,count(distinct cart_uuid) AS cart_uv,count(distinct submit_page_uuid) AS submit_page_uv,count(distinct submit_ord_uuid) AS submit_ord_uv,count(distinct push_ord_uuid) AS push_ord_uv,count(distinct arrange_ord_uuid) AS arrange_ord_uv,count(distinct vegetable_expose_uuid) AS vege_expose_uv,count(distinct vegetable_arr_ord_uuid) AS vege_arr_ord_uv,count(distinct ingredients_expose_uuid) AS ingre_expose_uv,count(distinct ingredients_arr_ord_uuid) AS ingre_arr_ord_uv,cast(sum(arrange_ord_cnt) as integer) as arr_ord_cnt,sum(original_price) AS original_price,sum(actual_price) AS actual_price,count(distinct first_poi_ord_uuid) AS first_poi_ord_uv,count(distinct first_category_ord_uuid) AS first_cat_ord_uv,count(distinct first_sg_ord_uuid) AS first_sg_ord_uv,0 as expose_sku_uv ,0 as cart_sku_uv,0 as submit_ord_sku_uv, 0 as push_ord_sku_uv,0 as arr_ord_sku_uv from $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name union all  select $DIMENSIONS_COMBINATION$ dt,poi_id,poi_name,  0 as  home_page_uv, 0 as  cart_uv,0 as  submit_page_uv,0 as  submit_ord_uv,0 as  push_ord_uv,0 as  arrange_ord_uv,0 as  vege_expose_uv,0 as  vege_arr_ord_uv,0 as  ingre_expose_uv,0 as  ingre_arr_ord_uv,cast(0 as integer) as arr_ord_cnt,cast(0.0 as double) as original_price,cast(0.0 as double) as actual_price,0 as  first_poi_ord_uv,0 as  first_cat_ord_uv,0 as  first_sg_ord_uv,count(distinct expose_sku) as expose_sku_uv, count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as submit_ord_sku_uv, count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv from mart_lingshou.app_flow_sdk_aoi_sku_dd where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name ) t0 $DIMENSION_GROUP_COMBINATION$, dt,poi_id,poi_name )$DIMENSION_GROUP_COMBINATION$,poi_id) t1 where 1=1 $DIMENSION_SEARCH$ $DIMENSION_SORT$ $PAGINATION$'
              }
            ],
            deps: [
              {
                name: 611,
                required: true
              },
              {
                name: 612,
                required: true
              },
              {
                name: 613,
                required: true
              },
              {
                name: 6101,
                required: true
              },
              {
                name: 6102,
                required: true
              },
              {
                name: 6103,
                required: true
              },
              {
                name: 6104,
                required: true
              },
              {
                name: 6105,
                required: true
              },
              {
                name: 61716,
                required: true
              },
              {
                name: 61714,
                required: true
              },
              {
                name: 61715,
                required: true
              },
              {
                name: 61711,
                required: false
              },
              {
                name: 6171,
                isSubcribeOnly: false
              }
            ],
            head: [
              {
                code: 'city_id',
                hide: true,
                name: '城市ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'city_name',
                name: '城市',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_id',
                hide: true,
                name: '联络点ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_name',
                name: '联络点',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_id',
                hide: true,
                name: '蜂窝ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_name',
                name: '蜂窝',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_id',
                hide: true,
                name: 'AOI',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_name',
                name: 'AOI名称',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_type',
                name: 'AOI类型',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'poi_id',
                name: '访问门店ID',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'poi_name',
                name: '访问门店名称',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'terminal_name',
                name: '终端',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'user_type_name',
                name: '访问用户类型',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'operate_type_name',
                name: '运营组',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_tag_name',
                name: '商家一级品类',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'home_page_uv',
                info:
                  '统计日期内，商家主页或商品通过某个流量入口在用户端成功展示的人数总和（按设备号union_id整体去重）；在本产品中进店人数包括了没有进店记录（流量日志记录会有轻微丢失）但是在门店主页有浏览商品行为或者产生了订单的用户。',
                name: '进店人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'cart_uv',
                info: '统计日期内，用户在门店主页或商品详情页把商品加到加购物车的人数（按设备号union_id整体去重）',
                name: '加购人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_page_uv',
                info: '统计日期内，提单页通过某个流量入口在用户端成功展示的人数总和（按设备号union_id整体去重）',
                name: '提单页曝光人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_ord_uv',
                info:
                  '统计日期内，用户通过某个流量入口成功提交订单的人数总和（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '提单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'push_ord_uv',
                info:
                  '统计日期内，用户通过某个流量入口成功提交订单后被推单的人数总和（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '推单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'arrange_ord_uv',
                info:
                  '统计日期内，用户通过某个流量入口成功提交订单且截止当天23:59:59订单未取消的人数总和（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '订单人数（流量）',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'visit_rate',
                info: '订单人数（流量）/进店人数',
                name: '进店访购率',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'vege_expose_uv',
                info:
                  '统计日期内，蔬菜类目商品在门店主页的曝光人数；蔬菜类目商品取算法侧计算出来的商品类目表中商品二级类目=蔬菜的所有商品',
                name: '蔬菜商品曝光人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'vege_arr_ord_uv',
                info:
                  '统计日期内，蔬菜类目商品的订单人数（流量）；蔬菜类目商品取算法侧计算出来的商品类目表中商品二级类目=蔬菜的所有商品',
                name: '蔬菜商品订单人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'vege_visit_rate',
                info: '蔬菜商品订单人数/蔬菜商品曝光人数',
                name: '蔬菜商品访购率',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'ingre_expose_uv',
                info:
                  '统计日期内，商品二级类目为食材的所有商品的曝光人数总和（按设备号union_id整体去重）；食材类目商品取算法侧计算出来的商品类目表中商品二级类目为食材类目的所有商品；食材类目：1）一级类目“生鲜果蔬”下的4个二级类目：水产海鲜、肉类、蔬菜、蛋品；2）一级类目“粮油调味”下的8个二级类目：农产品干货、干面条、杂粮米类、杂粮豆类、水产干货、烹饪油、米、面粉',
                name: '食材商品曝光人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'ingre_arr_ord_uv',
                info:
                  '统计日期内，商品二级类目为食材的所有商品的订单人数总和（按设备号union_id整体去重）；食材类目商品取算法侧计算出来的商品类目表中商品二级类目为食材类目的所有商品；食材类目：1）一级类目“生鲜果蔬”下的4个二级类目：水产海鲜、肉类、蔬菜、蛋品；2）一级类目“粮油调味”下的8个二级类目：农产品干货、干面条、杂粮米类、杂粮豆类、水产干货、烹饪油、米、面粉',
                name: '食材商品订单人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'ingre_visit_rate',
                info: '食材商品订单人数/食材商品曝光人数',
                name: '食材商品访购率',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'arr_ord_cnt',
                info: '',
                name: '订单数',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'original_price',
                info: '',
                name: '原价交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'actual_price',
                info: '',
                name: '实付交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'org_price_per_ord',
                info: '',
                name: '原价单均价',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'actual_price_per_ord',
                info: '',
                name: '实付单均价',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_cat_ord_uv',
                info:
                  '统计日期内，首次在闪购某门店产生有效订单（在统计日期前未曾产生过有效订单）的用户数总和（按设备号union_id整体去重）',
                name: '品类新客数',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_cat_ord_rate',
                info: '品类新客数/订单人数（流量）',
                name: '品类新客占比',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'first_sg_ord_uv',
                info:
                  '统计日期内，首次在闪购某门店产生有效订单（在统计日期前未曾产生过有效订单）的用户数总和（按设备号union_id整体去重）',
                name: '闪购新客数',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'first_sg_ord_rate',
                info: '品类新客数/订单人数（流量）',
                name: '闪购新客占比',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'first_poi_ord_uv',
                info:
                  '统计日期内，首次在闪购某门店产生有效订单（在统计日期前未曾产生过有效订单）的用户数总和（按设备号union_id整体去重）',
                name: '门店新客数',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'first_poi_ord_rate',
                info: '门店新客数/订单人数（流量）',
                name: '门店新客占比',
                category: '新客指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'expose_sku_uv',
                info: '统计日期内，在门店主页产生曝光的商品数量',
                name: '曝光商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'cart_sku_uv',
                info: '统计日期内，在门店主页产生加购的商品数量',
                name: '加购商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_ord_sku_uv',
                info: '统计日期内，产生提单的商品数量',
                name: '提单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'push_ord_sku_uv',
                info: '统计日期内，产生推单的商品数量',
                name: '推单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'arr_ord_sku_uv',
                info: '统计日期内，产生订单的商品数量',
                name: '订单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              }
            ],
            action: '/api/v1/activity/portlet/query',
            MEASURES: [
              {
                code: 'home_page_uv',
                name: '进店人数',
                type: '0',
                precision: ',###',
                expression: 'home_page_uv'
              },
              {
                code: 'cart_uv',
                name: '加购人数',
                type: '0',
                precision: ',###',
                expression: 'cart_uv'
              },
              {
                code: 'submit_page_uv',
                name: '提单页曝光人数',
                type: '0',
                precision: ',###',
                expression: 'submit_page_uv'
              },
              {
                code: 'submit_ord_uv',
                name: '提单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'submit_ord_uv'
              },
              {
                code: 'push_ord_uv',
                name: '推单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'push_ord_uv'
              },
              {
                code: 'arrange_ord_uv',
                name: '订单人数（流量）',
                type: '0',
                precision: ',###',
                expression: 'arrange_ord_uv'
              },
              {
                code: 'visit_rate',
                name: '进店访购率（流量）',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when home_page_uv=0 then 0.0 else cast(arrange_ord_uv as double)/cast (home_page_uv as double) end'
              },
              {
                code: 'vege_expose_uv',
                name: '蔬菜商品曝光人数',
                type: '0',
                precision: ',###',
                expression: 'vege_expose_uv'
              },
              {
                code: 'vege_arr_ord_uv',
                name: '蔬菜商品订单人数',
                type: '0',
                precision: ',###',
                expression: 'vege_arr_ord_uv'
              },
              {
                code: 'vege_visit_rate',
                name: '蔬菜商品访购率',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when vege_expose_uv=0 then 0.0 else cast(vege_arr_ord_uv as double)/cast(vege_expose_uv as double) end'
              },
              {
                code: 'ingre_expose_uv',
                name: '食材商品曝光人数',
                type: '0',
                precision: ',###',
                expression: 'ingre_expose_uv'
              },
              {
                code: 'ingre_arr_ord_uv',
                name: '食材商品订单人数',
                type: '0',
                precision: ',###',
                expression: 'ingre_arr_ord_uv'
              },
              {
                code: 'ingre_visit_rate',
                name: '食材商品访购率',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when ingre_expose_uv=0 then 0.0 else cast(ingre_arr_ord_uv as double)/cast(ingre_expose_uv as double) end'
              },
              {
                code: 'arr_ord_cnt',
                name: '订单数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_cnt'
              },
              {
                code: 'original_price',
                name: '原价交易额',
                type: '0',
                precision: ',###',
                expression: 'original_price'
              },
              {
                code: 'actual_price',
                name: '实付交易额',
                type: '0',
                precision: ',###',
                expression: 'actual_price'
              },
              {
                code: 'org_price_per_ord',
                name: '原价单均价',
                type: '1',
                precision: '0.0',
                expression:
                  'case when arr_ord_cnt=0 then 0.0 else cast(original_price as double)/cast(arr_ord_cnt as double) end'
              },
              {
                code: 'actual_price_per_ord',
                name: '实付单均价',
                type: '1',
                precision: '0.0',
                expression:
                  'case when arr_ord_cnt=0 then 0 else  cast(actual_price as double)/cast(arr_ord_cnt as double) end'
              },
              {
                code: 'first_poi_ord_uv',
                name: '门店新客数',
                type: '0',
                precision: ',###',
                expression: 'first_poi_ord_uv'
              },
              {
                code: 'first_poi_ord_rate',
                name: '门店新客占比',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when arrange_ord_uv=0 then 0.0 else cast(first_poi_ord_uv as double)/cast(arrange_ord_uv as double) end'
              },
              {
                code: 'first_cat_ord_uv',
                name: '品类新客数',
                type: '0',
                precision: ',###',
                expression: 'first_cat_ord_uv'
              },
              {
                code: 'first_cat_ord_rate',
                name: '品类新客占比',
                type: '1',
                precision: '0.00%',
                expression:
                  'case when arrange_ord_uv=0 then 0.0 else cast(first_cat_ord_uv as double)/cast(arrange_ord_uv as double) end'
              },
              {
                code: 'first_sg_ord_uv',
                name: '闪购新客数',
                type: '0',
                precision: ',###',
                expression: 'first_sg_ord_uv'
              },
              {
                code: 'first_sg_ord_rate',
                name: '闪购新客占比',
                type: '0',
                precision: '0.00%',
                expression:
                  'case when arrange_ord_uv=0 then 0.0 else cast(first_sg_ord_uv as double)/cast(arrange_ord_uv as double) end'
              },
              {
                code: 'expose_sku_uv',
                name: '曝光商品数',
                type: '0',
                precision: ',###',
                expression: 'expose_sku_uv'
              },
              {
                code: 'cart_sku_uv',
                name: '加购商品数',
                type: '0',
                precision: ',###',
                expression: 'cart_sku_uv'
              },
              {
                code: 'submit_ord_sku_uv',
                name: '提单商品数',
                type: '0',
                precision: ',###',
                expression: 'submit_ord_sku_uv'
              },
              {
                code: 'push_ord_sku_uv',
                name: '推单商品数',
                type: '0',
                precision: ',###',
                expression: 'push_ord_sku_uv'
              },
              {
                code: 'arr_ord_sku_uv',
                name: '订单商品数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_sku_uv'
              }
            ],
            download: {
              rows: 10000,
              action: '/api/v1/activity/portlet/download'
            },
            subTitle:
              '1、此处统计的各门店的流量指标为定位在某联络点、蜂窝、AOI的用户的访问和转化数据，其他产品中门店的各流量指标是门店整体（所有用户）的流量指标，计算口径不一样所以对比下来会有差距，还请知悉；2、此处门店明细可能会出现距离某联络点、某蜂窝、某AOI较远的门店（且这些联络点、蜂窝、AOI不在该门店的配送范围），此为用户定位经纬度埋点上报异常引起的，具体原因见顶部说明。',
            component: 'table',
            TABLE_NAME: 'MART_LINGSHOU.app_flow_sdk_aoi_poi_dd',
            pagination: {
              total: 20,
              pageNo: 1,
              pageSize: 25
            },
            needDimsGroup: true,
            MEASURES_BASIC: [
              'home_page_uv',
              'cart_uv',
              'submit_page_uv',
              'submit_ord_uv',
              'push_ord_uv',
              'arrange_ord_uv',
              'vege_expose_uv',
              'vege_arr_ord_uv',
              'ingre_expose_uv',
              'ingre_arr_ord_uv',
              'arr_ord_cnt',
              'original_price',
              'actual_price',
              'first_poi_ord_uv',
              'first_cat_ord_uv',
              'first_sg_ord_uv'
            ],
            portlet_filter: [
              {
                id: 61714,
                hide: true,
                type: 'dimension',
                multi: true,
                title: '运营组',
                filters: [
                  {
                    id: 617141,
                    title: '运营组',
                    col_key: 'operate_type_id',
                    col_val: '',
                    virtual: true,
                    col_name: 'operate_type_name',
                    col_type: 'string',
                    default_selected: true
                  }
                ],
                component: 'selector',
                dimsGroupOnly: true
              },
              {
                id: 61715,
                hide: true,
                type: 'dimension',
                multi: true,
                title: '商家一级品类',
                filters: [
                  {
                    id: 617151,
                    title: '商家一级品类',
                    col_key: 'first_tag_id',
                    col_val: '',
                    virtual: true,
                    col_name: 'first_tag_name',
                    col_type: 'string',
                    default_selected: true
                  }
                ],
                component: 'selector',
                dimsGroupOnly: true
              },
              {
                id: 61716,
                deps: [
                  {
                    name: 617,
                    required: true
                  }
                ],
                type: 'measure',
                multi: true,
                title: '多指标',
                filter: [
                  {
                    id: 621164,
                    col_key: 'home_page_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '进店人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621166,
                    col_key: 'cart_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '加购人数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621167,
                    col_key: 'submit_page_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '提单页曝光人数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621168,
                    col_key: 'submit_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '提单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621169,
                    col_key: 'push_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '推单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621170,
                    col_key: 'arrange_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '订单人数（流量）',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621171,
                    col_key: 'visit_rate',
                    col_val: '',
                    category: '用户指标',
                    col_name: '进店访购率（流量）',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621173,
                    col_key: 'vege_expose_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '蔬菜商品曝光人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621174,
                    col_key: 'vege_arr_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '蔬菜商品订单人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621175,
                    col_key: 'vege_visit_rate',
                    col_val: '',
                    category: '用户指标',
                    col_name: '蔬菜商品访购率',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621176,
                    col_key: 'ingre_expose_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '食材商品曝光人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621177,
                    col_key: 'ingre_arr_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '食材商品订单人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621178,
                    col_key: 'ingre_visit_rate',
                    col_val: '',
                    category: '用户指标',
                    col_name: '食材商品访购率',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621179,
                    col_key: 'arr_ord_cnt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '订单数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621180,
                    col_key: 'original_price',
                    col_val: '',
                    category: '交易指标',
                    col_name: '原价交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621181,
                    col_key: 'actual_price',
                    col_val: '',
                    category: '交易指标',
                    col_name: '实付交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621182,
                    col_key: 'org_price_per_ord',
                    col_val: '',
                    category: '交易指标',
                    col_name: '原价单均价',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621183,
                    col_key: 'actual_price_per_ord',
                    col_val: '',
                    category: '交易指标',
                    col_name: '实付单均价',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621188,
                    col_key: 'first_poi_ord_uv',
                    col_val: '',
                    category: '新客指标',
                    col_name: '门店新客数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621189,
                    col_key: 'first_poi_ord_rate',
                    col_val: '',
                    category: '新客指标',
                    col_name: '门店新客占比',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621184,
                    col_key: 'first_cat_ord_uv',
                    col_val: '',
                    category: '新客指标',
                    col_name: '品类新客数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621185,
                    col_key: 'first_cat_ord_rate',
                    col_val: '',
                    category: '新客指标',
                    col_name: '品类新客占比',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621186,
                    col_key: 'first_sg_ord_uv',
                    col_val: '',
                    category: '新客指标',
                    col_name: '闪购新客数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621187,
                    col_key: 'first_sg_ord_rate',
                    col_val: '',
                    category: '新客指标',
                    col_name: '闪购新客占比',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621190,
                    col_key: 'expose_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '曝光商品数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 621191,
                    col_key: 'cart_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '加购商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621192,
                    col_key: 'submit_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '提单商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621193,
                    col_key: 'push_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '推单商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 621194,
                    col_key: 'arr_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '订单商品数',
                    col_type: '',
                    default_selected: true
                  }
                ],
                component: 'measure.float.right',
                type_name: '指标'
              },
              {
                id: 61711,
                type: 'search',
                filters: [
                  {
                    id: 621111,
                    col_key: 'poi_name',
                    col_val: '',
                    col_name: '门店名称',
                    col_rule: "poi_name like '%$COL_VAL$%'",
                    col_type: 'string',
                    default_selected: true
                  },
                  {
                    id: 621112,
                    col_key: 'poi_id',
                    col_val: '',
                    col_name: '门店ID',
                    col_type: 'int'
                  }
                ],
                component: 'search-input.float.right',
                type_name: '搜索'
              },
              {
                id: 61712,
                type: 'sort',
                filters: [
                  {
                    id: 621124,
                    col_key: 'home_page_uv',
                    col_val: 'desc',
                    col_name: '进店人数',
                    default_selected: true
                  },
                  {
                    id: 621126,
                    col_key: 'cart_uv',
                    col_val: 'desc',
                    col_name: '加购人数'
                  },
                  {
                    id: 621128,
                    col_key: 'submit_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '提单人数(流量)'
                  },
                  {
                    id: 621129,
                    col_key: 'push_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '推单人数(流量)'
                  },
                  {
                    id: 621130,
                    col_key: 'arrange_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '订单人数（流量）'
                  },
                  {
                    id: 621131,
                    col_key: 'visit_rate',
                    col_val: 'desc',
                    col_name: '进店访购率（流量）'
                  },
                  {
                    id: 621133,
                    col_key: 'vege_expose_uv',
                    col_val: 'desc',
                    col_name: '蔬菜商品曝光人数'
                  },
                  {
                    id: 621134,
                    col_key: 'vege_arr_ord_uv',
                    col_val: 'desc',
                    col_name: '蔬菜商品订单人数'
                  },
                  {
                    id: 621135,
                    col_key: 'vege_visit_rate',
                    col_val: 'desc',
                    col_name: '蔬菜商品访购率'
                  },
                  {
                    id: 621136,
                    col_key: 'ingre_expose_uv',
                    col_val: 'desc',
                    col_name: '食材商品曝光人数'
                  },
                  {
                    id: 621137,
                    col_key: 'ingre_arr_ord_uv',
                    col_val: 'desc',
                    col_name: '食材商品订单人数'
                  },
                  {
                    id: 621138,
                    col_key: 'ingre_visit_rate',
                    col_val: 'desc',
                    col_name: '食材商品访购率'
                  },
                  {
                    id: 621139,
                    col_key: 'arr_ord_cnt',
                    col_val: 'desc',
                    col_name: '订单数'
                  },
                  {
                    id: 621140,
                    col_key: 'original_price',
                    col_val: 'desc',
                    col_name: '原价交易额'
                  },
                  {
                    id: 621141,
                    col_key: 'actual_price',
                    col_val: 'desc',
                    col_name: '实付交易额'
                  },
                  {
                    id: 621142,
                    col_key: 'org_price_per_ord',
                    col_val: 'desc',
                    col_name: '原价单均价'
                  },
                  {
                    id: 621143,
                    col_key: 'actual_price_per_ord',
                    col_val: 'desc',
                    col_name: '实付单均价'
                  },
                  {
                    id: 621144,
                    col_key: 'first_poi_ord_uv',
                    col_val: 'desc',
                    col_name: '门店新客数'
                  },
                  {
                    id: 621145,
                    col_key: 'first_poi_ord_rate',
                    col_val: 'desc',
                    col_name: '门店新客占比'
                  },
                  {
                    id: 621146,
                    col_key: 'first_cat_ord_uv',
                    col_val: 'desc',
                    col_name: '品类新客数'
                  },
                  {
                    id: 621147,
                    col_key: 'first_cat_ord_rate',
                    col_val: 'desc',
                    col_name: '品类新客占比'
                  },
                  {
                    id: 621148,
                    col_key: 'first_sg_ord_uv',
                    col_val: 'desc',
                    col_name: '闪购新客数'
                  },
                  {
                    id: 621149,
                    col_key: 'first_sg_ord_rate',
                    col_val: 'desc',
                    col_name: '闪购新客占比'
                  },
                  {
                    id: 621150,
                    col_key: 'expose_sku_uv',
                    col_val: 'desc',
                    col_name: '曝光商品数'
                  },
                  {
                    id: 621151,
                    col_key: 'cart_sku_uv',
                    col_val: 'desc',
                    col_name: '加购商品数'
                  },
                  {
                    id: 621152,
                    col_key: 'submit_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '提单商品数'
                  },
                  {
                    id: 621153,
                    col_key: 'push_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '推单商品数'
                  },
                  {
                    id: 621154,
                    col_key: 'arr_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '交易商品数'
                  }
                ],
                type_name: '排序'
              }
            ],
            componentWrapper: 'layout-portlet'
          }
        ],
        component: 'layout-tab-card-pane'
      },
      {
        id: 618,
        type: 'portlet',
        title: '用户浏览商品类目&下单转化',
        portlet: [
          {
            id: 6181,
            SQL: [
              {
                dt:
                  'select count(0) as TOTAL from (select $DIMENSIONS$, first_category_name,second_category_name  from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$,first_category_name,second_category_name) @ select max(expose_uv) as expose_uv_max,min(expose_uv) as expose_uv_min,max(arr_ord_uv) as arr_ord_uv_max,min(arr_ord_uv) as arr_ord_uv_min,max(arr_ord_cnt) as arr_ord_cnt_max,min(arr_ord_cnt) as arr_ord_cnt_min,max(sale_cnt) as sale_cnt_max,min(sale_cnt) as sale_cnt_min,max(org_amt) as org_amt_max,min(org_amt) as org_amt_min,max(actual_amt) as actual_amt_max,min(actual_amt) as actual_amt_min from (select $DIMENSIONS$, first_category_name,second_category_name ,count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv,case when count(distinct expose_uuid)=0 then 0.0 else cast(count(distinct arrange_ord_uuid) as double)/cast(count(distinct expose_uuid) as double) end as cate_visit_rate, count(distinct expose_sku) as expose_sku_uv,count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as  submit_ord_sku_uv,count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt,1- (case when sum(original_price)=0 then 0 else cast(sum(actual_price) as double)/cast(sum(original_price) as double) end )as sku_discount_rate from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$,first_category_name,second_category_name) @select $DIMENSIONS$, first_category_name,second_category_name ,count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv,case when count(distinct expose_uuid)=0 then 0.0 else cast(count(distinct arrange_ord_uuid) as double)/cast(count(distinct expose_uuid) as double) end as cate_visit_rate, count(distinct expose_sku) as expose_sku_uv,count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as  submit_ord_sku_uv,count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt,1- (case when sum(original_price)=0 then 0 else cast(sum(actual_price) as double)/cast(sum(original_price) as double) end )as sku_discount_rate from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$,first_category_name,second_category_name $DIMENSION_SORT$ $PAGINATION$',
                wk:
                  'select count(0) as TOTAL from (select $DIMENSIONS$, first_category_name,second_category_name from  (select $DIMENSIONS$, dt, first_category_name,second_category_name  from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$, dt,first_category_name,second_category_name) group by $DIMENSIONS$, first_category_name,second_category_name)  @  select max(expose_uv) as expose_uv_max,min(expose_uv) as expose_uv_min,max(arr_ord_uv) as arr_ord_uv_max,min(arr_ord_uv) as arr_ord_uv_min,max(arr_ord_cnt) as arr_ord_cnt_max,min(arr_ord_cnt) as arr_ord_cnt_min,max(sale_cnt) as sale_cnt_max,min(sale_cnt) as sale_cnt_min,max(org_amt) as org_amt_max,min(org_amt) as org_amt_min,max(actual_amt) as actual_amt_max,min(actual_amt) as actual_amt_min from (select $DIMENSIONS$, first_category_name,second_category_name,avg(expose_uv) as expose_uv,avg(cart_uv) as cart_uv,avg(submit_ord_uv) as submit_ord_uv,avg(push_ord_uv) as push_ord_uv,avg(arr_ord_uv) as arr_ord_uv,avg(expose_sku_uv) as  expose_sku_uv,avg(cart_sku_uv) as cart_sku_uv,avg(submit_ord_sku_uv) as submit_ord_sku_uv,avg(push_ord_sku_uv) as  push_ord_sku_uv,avg(arr_ord_sku_uv) as arr_ord_sku_uv,avg(arr_ord_cnt) as arr_ord_cnt,avg(sale_cnt) as  sale_cnt,avg(org_amt) as org_amt,avg(actual_amt) as  actual_amt from  (select $DIMENSIONS$, dt,first_category_name,second_category_name ,count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv, count(distinct expose_sku) as expose_sku_uv,count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as  submit_ord_sku_uv,count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$,dt,first_category_name,second_category_name) group by $DIMENSIONS$, first_category_name,second_category_name) @select $DIMENSIONS$, first_category_name,second_category_name,avg(expose_uv) as expose_uv,avg(cart_uv) as cart_uv,avg(submit_ord_uv) as submit_ord_uv,avg(push_ord_uv) as push_ord_uv,avg(arr_ord_uv) as arr_ord_uv,avg(expose_sku_uv) as  expose_sku_uv,avg(cart_sku_uv) as cart_sku_uv,avg(submit_ord_sku_uv) as submit_ord_sku_uv,avg(push_ord_sku_uv) as  push_ord_sku_uv,avg(arr_ord_sku_uv) as arr_ord_sku_uv,avg(arr_ord_cnt) as arr_ord_cnt,avg(sale_cnt) as  sale_cnt,avg(org_amt) as org_amt,avg(actual_amt) as  actual_amt,case when avg(expose_uv)=0 then 0.0 else cast(avg(arr_ord_uv) as double)/cast(avg(expose_uv) as double)  end as cate_visit_rate,1- (case when avg(org_amt)=0 then 0 else cast(avg(actual_amt) as double)/cast(avg(org_amt) as double) end)as sku_discount_rate from  (select $DIMENSIONS$, dt,first_category_name,second_category_name ,count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv, count(distinct expose_sku) as expose_sku_uv,count(distinct cart_sku) as cart_sku_uv,count(distinct submit_ord_sku) as  submit_ord_sku_uv,count(distinct push_ord_sku) as push_ord_sku_uv,count(distinct arrange_ord_sku) as arr_ord_sku_uv,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$  group by $DIMENSIONS$,dt,first_category_name,second_category_name) group by $DIMENSIONS$, first_category_name,second_category_name $DIMENSION_SORT$ $PAGINATION$'
              }
            ],
            deps: [
              {
                name: 611,
                required: true
              },
              {
                name: 612,
                required: true
              },
              {
                name: 613,
                required: true
              },
              {
                name: 6101,
                required: true
              },
              {
                name: 6102,
                required: true
              },
              {
                name: 6103,
                required: true
              },
              {
                name: 6104,
                required: true
              },
              {
                name: 6105,
                required: true
              },
              {
                name: 61814,
                required: true
              },
              {
                name: 61811,
                required: true
              },
              {
                name: 6181,
                isSubcribeOnly: false
              }
            ],
            head: [
              {
                code: 'city_id',
                hide: true,
                name: '城市ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'city_name',
                name: '城市',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_id',
                hide: true,
                name: '联络点ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_name',
                name: '联络点',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_id',
                hide: true,
                name: '蜂窝ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_name',
                name: '蜂窝',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_id',
                hide: true,
                name: 'AOI',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_name',
                name: 'AOI名称',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_type',
                name: 'AOI类型',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'terminal_name',
                name: '终端',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'user_type_name',
                name: '访问用户类型',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'operate_type_name',
                name: '运营组',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_tag_name',
                name: '商家一级品类',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_category_name',
                name: '商品一级类目',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'second_category_name',
                name: '商品二级类目',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'expose_uv',
                info:
                  '统计日期内，商品在门店主页的曝光人数（按设备号union_id整体去重）；这里为商品所属类目的曝光人数去重',
                name: '曝光人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'cart_uv',
                info:
                  '统计日期内，用户在门店主页或商品详情页把商品加到加购物车的人数（按设备号union_id整体去重）；这里为商品所属类目的加购人数去重',
                name: '加购人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_ord_uv',
                info:
                  '统计日期内，包含该商品的订单被提交订单的人数（按设备号union_id整体去重）；这里为商品所属类目的提单人数去重。注：该数据来自日志数据，和业务数据略有差异',
                name: '提单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'push_ord_uv',
                info:
                  '统计日期内，包含该商品的订单成功推送到商家的人数（按设备号union_id整体去重）；这里为商品所属类目的推单人数去重。注：该数据来自日志数据，和业务数据略有差异',
                name: '推单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'arr_ord_uv',
                info:
                  '统计日期内，包含该商品的订单提交之后未取消的人数（按设备号union_id整体去重）；这里为商品所属类目的订单人数去重。注：该数据来自日志数据，和业务数据略有差异',
                name: '订单人数（流量）',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'cate_visit_rate',
                info: '订单人数（流量）/曝光人数',
                name: '商品类目访购率',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'expose_sku_uv',
                info: '统计日期内，在门店主页产生曝光的商品数量',
                name: '曝光商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'cart_sku_uv',
                info: '统计日期内，在门店主页产生加购的商品数量',
                name: '加购商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_ord_sku_uv',
                info: '统计日期内，产生提单的商品数量',
                name: '提单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'push_ord_sku_uv',
                info: '统计日期内，产生推单的商品数量',
                name: '推单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'arr_ord_sku_uv',
                info: '统计日期内，产生订单的商品数量',
                name: '订单商品数',
                category: '商品指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'arr_ord_cnt',
                info:
                  '统计日期内，用户提交订单且截止当天23:59:59未取消的包含该类目商品的订单数量总和。注：因一个订单可能包含多个类目的商品，故所有类目订单数相加大于所选条件的总订单数',
                name: '含商品订单数',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'sale_cnt',
                info: '统计日期内，商品销售的数量；这里指商品所属类目总销量',
                name: '商品销量',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'org_amt',
                info: '统计日期内，商品销售的原价交易额；这里指商品所属类目的总原价交易额',
                name: '商品原价交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                max: 0,
                min: 0,
                cell: 'inline-bar',
                code: 'actual_amt',
                info: '统计日期内，商品销售的现价交易额；这里指商品所属类目的总现价交易额',
                name: '商品现价交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'sku_discount_rate',
                info: '商品实际销售时的折扣力度，计算公式为：（1-商品现价交易额/商品原价交易额）*100%',
                name: '商品活动折扣力度',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              }
            ],
            action: '/api/v1/activity/portlet/query',
            MEASURES: [
              {
                code: 'expose_uv',
                name: '曝光人数',
                type: '0',
                precision: ',###',
                expression: 'home_page_uv'
              },
              {
                code: 'cart_uv',
                name: '加购人数',
                type: '0',
                precision: ',###',
                expression: 'cart_uv'
              },
              {
                code: 'submit_ord_uv',
                name: '提单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'submit_ord_uv'
              },
              {
                code: 'push_ord_uv',
                name: '推单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'push_ord_uv'
              },
              {
                code: 'arrange_ord_uv',
                name: '订单人数（流量）',
                type: '0',
                precision: ',###',
                expression: 'arrange_ord_uv'
              },
              {
                code: 'cate_visit_rate',
                name: '访购率（流量）',
                type: '0',
                precision: '0.00%',
                expression: 'cate_visit_rate'
              },
              {
                code: 'expose_sku_uv',
                name: '曝光商品数',
                type: '0',
                precision: ',###',
                expression: 'expose_sku_uv'
              },
              {
                code: 'cart_sku_uv',
                name: '加购商品数',
                type: '0',
                precision: ',###',
                expression: 'cart_sku_uv'
              },
              {
                code: 'submit_ord_sku_uv',
                name: '提单商品数',
                type: '0',
                precision: ',###',
                expression: 'submit_ord_sku_uv'
              },
              {
                code: 'push_ord_sku_uv',
                name: '推单商品数',
                type: '0',
                precision: ',###',
                expression: 'push_ord_sku_uv'
              },
              {
                code: 'arr_ord_sku_uv',
                name: '订单商品数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_sku_uv'
              },
              {
                code: 'arr_ord_cnt',
                name: '含商品订单数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_cnt'
              },
              {
                code: 'sale_cnt',
                name: '商品销量',
                type: '0',
                precision: ',###',
                expression: 'sale_cnt'
              },
              {
                code: 'org_amt',
                name: '商品原价交易额',
                type: '0',
                precision: ',###',
                expression: 'org_amt'
              },
              {
                code: 'actual_amt',
                name: '商品现价交易额',
                type: '0',
                precision: ',###',
                expression: 'actual_amt'
              },
              {
                code: 'sku_discount_rate',
                name: '商品活动折扣力度',
                type: '0',
                precision: '0.00%',
                expression: 'sku_discount_rate'
              }
            ],
            download: {
              rows: 10000,
              action: '/api/v1/activity/portlet/download'
            },
            subTitle:
              '商品一、二级类目取自算法侧计算出的商品类目映射表，“未知”代表类目为空（即商品没有匹配到对应类目），目前算法表里只有生活超市、生鲜果蔬商家的商品有相应的类目信息，其他品类商家商品的类目暂时都归为未知；',
            component: 'table',
            TABLE_NAME: 'MART_LINGSHOU.app_flow_sdk_aoi_SKU_dd',
            pagination: {
              total: 20,
              pageNo: 1,
              pageSize: 25
            },
            needDimsGroup: true,
            MEASURES_BASIC: [],
            portlet_filter: [
              {
                id: 61814,
                type: 'dimension',
                multi: true,
                title: '商品一级类目',
                action: '/api/v1/report/dim/query',
                filter: [
                  {
                    id: 618141,
                    title: '全部',
                    format: '文本',
                    col_key: 'global_platform',
                    col_val: '0',
                    virtual: true,
                    col_name: '全部',
                    col_type: 'string',
                    selected: false,
                    default_selected: false
                  },
                  {
                    id: 618142,
                    title: '商品一级类目',
                    format: '文本',
                    col_key: 'first_category_name',
                    col_val: '',
                    col_name: 'first_category_name',
                    col_type: 'string',
                    default_selected: false
                  }
                ],
                component: 'selector',
                table_name: 'dim_aoi_product_category'
              },
              {
                id: 61811,
                deps: [
                  {
                    name: 618,
                    required: true
                  }
                ],
                type: 'measure',
                multi: true,
                title: '多指标',
                filter: [
                  {
                    id: 618114,
                    col_key: 'expose_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '曝光人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618116,
                    col_key: 'cart_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '加购人数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618118,
                    col_key: 'submit_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '提单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618119,
                    col_key: 'push_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '推单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618120,
                    col_key: 'arr_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '订单人数（流量）',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618121,
                    col_key: 'cate_visit_rate',
                    col_val: '',
                    category: '用户指标',
                    col_name: '商品类目访购率',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618122,
                    col_key: 'expose_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '曝光商品数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618123,
                    col_key: 'cart_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '加购商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618124,
                    col_key: 'submit_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '提单商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618125,
                    col_key: 'push_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '推单商品数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 618126,
                    col_key: 'arr_ord_sku_uv',
                    col_val: '',
                    category: '商品指标',
                    col_name: '订单商品数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618127,
                    col_key: 'arr_ord_cnt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '含商品订单数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618128,
                    col_key: 'sale_cnt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品销量',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618129,
                    col_key: 'org_amt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品原价交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618130,
                    col_key: 'actual_amt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品现价交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 618131,
                    col_key: 'sku_discount_rate',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品活动折扣力度',
                    col_type: '',
                    default_selected: true
                  }
                ],
                component: 'measure.float.right',
                type_name: '指标'
              },
              {
                id: 61812,
                type: 'sort',
                filters: [
                  {
                    id: 618124,
                    col_key: 'expose_uv',
                    col_val: 'desc',
                    col_name: '曝光人数',
                    default_selected: true
                  },
                  {
                    id: 618126,
                    col_key: 'cart_uv',
                    col_val: 'desc',
                    col_name: '加购人数'
                  },
                  {
                    id: 618128,
                    col_key: 'submit_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '提单人数(流量)'
                  },
                  {
                    id: 618129,
                    col_key: 'push_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '推单人数(流量)'
                  },
                  {
                    id: 618130,
                    col_key: 'arr_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '订单人数（流量）'
                  },
                  {
                    id: 618131,
                    col_key: 'cate_visit_rate',
                    col_val: 'desc',
                    col_name: '商品类目访购率'
                  },
                  {
                    id: 618132,
                    col_key: 'expose_sku_uv',
                    col_val: 'desc',
                    col_name: '曝光商品数'
                  },
                  {
                    id: 618133,
                    col_key: 'cart_sku_uv',
                    col_val: 'desc',
                    col_name: '加购商品数'
                  },
                  {
                    id: 618134,
                    col_key: 'submit_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '提单商品数'
                  },
                  {
                    id: 618135,
                    col_key: 'push_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '推单商品数'
                  },
                  {
                    id: 618136,
                    col_key: 'arr_ord_sku_uv',
                    col_val: 'desc',
                    col_name: '交易商品数'
                  },
                  {
                    id: 618137,
                    col_key: 'arr_ord_cnt',
                    col_val: 'desc',
                    col_name: '含商品订单数'
                  },
                  {
                    id: 618138,
                    col_key: 'sale_cnt',
                    col_val: 'desc',
                    col_name: '商品销量'
                  },
                  {
                    id: 618139,
                    col_key: 'org_amt',
                    col_val: 'desc',
                    col_name: '商品原价交易额'
                  },
                  {
                    id: 618140,
                    col_key: 'actual_amt',
                    col_val: 'desc',
                    col_name: '商品现价交易额'
                  },
                  {
                    id: 618131,
                    col_key: 'sku_discount_rate',
                    col_val: 'desc',
                    col_name: '商品活动折扣力度'
                  }
                ],
                type_name: '排序'
              }
            ],
            componentWrapper: 'layout-portlet'
          }
        ],
        component: 'layout-tab-card-pane'
      },
      {
        id: 619,
        type: 'portlet',
        title: '用户浏览商品明细&下单转化',
        portlet: [
          {
            id: 6191,
            SQL: [
              {
                dt:
                  'select count(0) as TOTAL from (select $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name, product_org_price as original_price from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$ group by $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name,product_org_price) where 1=1 $DIMENSION_SEARCH$ @select $DIMENSIONS$,sku_id,poi_id,poi_name,first_category_name,second_category_name,  original_price,   expose_uv, cart_uv, submit_ord_uv, push_ord_uv, arr_ord_uv, sku_visit_rate, arr_ord_cnt, sale_cnt, coalesce(org_amt,0.00) as org_amt, coalesce(actual_amt,0.00) as actual_amt, sku_discount_rate from (select $DIMENSIONS$,sku_id,poi_id,poi_name,first_category_name,second_category_name, product_org_price as original_price,  count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv,case when count(distinct expose_uuid)=0 then 0.0 else cast(count(distinct arrange_ord_uuid) as double)/cast(count(distinct expose_uuid) as double) end as sku_visit_rate,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt,1.0-(case when sum(original_price)=0 then 0 else cast(sum(actual_price) as double)/cast(sum(original_price) as double) end) as sku_discount_rate from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$ group by $DIMENSIONS$,sku_id,poi_id,poi_name,first_category_name,second_category_name,product_org_price) where 1=1 $DIMENSION_SEARCH$ $DIMENSION_SORT$ $PAGINATION$',
                wk:
                  'select count(0) as TOTAL from (select $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name,  original_price from(select $DIMENSIONS$,dt,sku_id,poi_id,first_category_name,second_category_name, product_org_price as original_price from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$ group by $DIMENSIONS$,dt,sku_id,poi_id,first_category_name,second_category_name,product_org_price) where 1=1 $DIMENSION_SEARCH$  group by $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name,original_price)@ select $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name,  original_price,max(poi_name) as poi_name,avg(expose_uv) as expose_uv, avg(cart_uv) as cart_uv, avg(submit_ord_uv) as submit_ord_uv, avg(push_ord_uv) as push_ord_uv , avg(arr_ord_uv) as arr_ord_uv, avg(arr_ord_cnt) as arr_ord_cnt ,avg(sale_cnt) as sale_cnt , avg(coalesce(org_amt,0.00)) as org_amt, avg(coalesce(actual_amt,0.00)) as actual_amt ,  case when avg(expose_uv)=0 then 0.0 else cast(avg(arr_ord_uv) as double)/cast(avg(expose_uv) as double) end as sku_visit_rate,1.0-(case when avg(org_amt)=0 then 0 else cast(avg(actual_amt) as double)/cast(sum(org_amt) as double) end) as sku_discount_rate from(select $DIMENSIONS$,dt,sku_id,poi_id,first_category_name,second_category_name, product_org_price as original_price, poi_name, count(distinct expose_uuid) as expose_uv,count(distinct cart_uuid) as cart_uv,count(distinct submit_ord_uuid) as submit_ord_uv,count(distinct push_ord_uuid) as push_ord_uv,count(distinct arrange_ord_uuid) as arr_ord_uv,count(distinct order_flow_bridge_id) as arr_ord_cnt,sum(sale_cnt) as sale_cnt,sum(original_price) as org_amt,sum(actual_price) as actual_amt from  $TABLE_NAME$ where $DIMENSION_STATIC$ $DIMENSION_DYNAMIC$ group by $DIMENSIONS$,dt,sku_id,poi_id,poi_name,first_category_name,second_category_name,product_org_price) where 1=1 $DIMENSION_SEARCH$  group by $DIMENSIONS$,sku_id,poi_id,first_category_name,second_category_name,original_price $DIMENSION_SORT$ $PAGINATION$'
              }
            ],
            deps: [
              {
                name: 611,
                required: true
              },
              {
                name: 612,
                required: true
              },
              {
                name: 613,
                required: true
              },
              {
                name: 6101,
                required: true
              },
              {
                name: 6102,
                required: true
              },
              {
                name: 6103,
                required: true
              },
              {
                name: 6104,
                required: true
              },
              {
                name: 6105,
                required: true
              },
              {
                name: 61913,
                required: true
              },
              {
                name: 61915,
                required: true
              },
              {
                name: 61916,
                required: false
              },
              {
                name: 61911,
                required: true
              },
              {
                name: 6191,
                isSubcribeOnly: false
              }
            ],
            head: [
              {
                code: 'city_id',
                hide: true,
                name: '城市ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'city_name',
                name: '城市',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_id',
                hide: true,
                name: '联络点ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'concat_point_name',
                name: '联络点',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_id',
                hide: true,
                name: '蜂窝ID',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aor_name',
                name: '蜂窝',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_id',
                hide: true,
                name: 'AOI',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_name',
                name: 'AOI名称',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'aoi_type',
                name: 'AOI类型',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'user_type_name',
                name: '访问用户类型',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'terminal_name',
                name: '终端',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'operate_type_name',
                name: '运营组',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_tag_name',
                name: '商家一级品类',
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'sku_id',
                name: '商品ID',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'sku_name',
                name: '商品名称',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'first_category_name',
                name: '商品一级类目',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'second_category_name',
                name: '商品二级类目',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'poi_id',
                name: '门店ID',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'poi_name',
                name: '门店名称',
                fixed: true,
                width: '100px',
                condition: {
                  SERVER: {
                    SHOW: true,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'original_price',
                info: '统计日期内，商品的平均原始售卖价格（非实际售卖），取商品快照表商品当天最后的原始价格',
                name: '商品原价',
                category: '价格',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'expose_uv',
                info: '统计日期内，商品在门店主页的曝光人数（按设备号union_id整体去重）',
                name: '曝光人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'cart_uv',
                info: '统计日期内，用户在门店主页或商品详情页把商品加到加购物车的人数（按设备号union_id整体去重）',
                name: '加购人数',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'submit_ord_uv',
                info:
                  '统计日期内，包含该商品的订单被提交订单的人数（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '提单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'push_ord_uv',
                info:
                  '统计日期内，包含该商品的订单成功推送到商家的人数（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '推单人数(流量)',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'arr_ord_uv',
                info:
                  '统计日期内，包含该商品的订单提交之后未取消的人数（按设备号union_id整体去重）。注：该数据来自日志数据，和业务数据略有差异',
                name: '订单人数（流量）',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'sku_visit_rate',
                info: '订单人数（流量）/曝光人数',
                name: '商品访购率',
                category: '用户指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'arr_ord_cnt',
                info: '统计日期内，用户提交订单且截止当天23:59:59未取消的包含该商品的订单数量总和',
                name: '含商品订单数',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'sale_cnt',
                info: '统计日期内，商品销售的数量',
                name: '商品销量',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'org_amt',
                info: '统计日期内，商品销售的原价交易额',
                name: '商品原价交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                code: 'actual_amt',
                info: '统计日期内，商品销售的现价交易额',
                name: '商品现价交易额',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              },
              {
                cell: 'inline-bar',
                code: 'sku_discount_rate',
                info: '商品实际销售时的折扣力度，计算公式为：（1-商品现价交易额/商品原价交易额）*100%',
                name: '商品活动折扣力度',
                category: '交易指标',
                condition: {
                  SERVER: {
                    SHOW: false,
                    DATE_KEY: 'dt,wk'
                  }
                }
              }
            ],
            action: '/api/v1/activity/portlet/query',
            MEASURES: [
              {
                code: 'expose_uv',
                name: '曝光人数',
                type: '0',
                precision: ',###',
                expression: 'home_page_uv'
              },
              {
                code: 'cart_uv',
                name: '加购人数',
                type: '0',
                precision: ',###',
                expression: 'cart_uv'
              },
              {
                code: 'submit_ord_uv',
                name: '提单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'submit_ord_uv'
              },
              {
                code: 'push_ord_uv',
                name: '推单人数(流量)',
                type: '0',
                precision: ',###',
                expression: 'push_ord_uv'
              },
              {
                code: 'arr_ord_uv',
                name: '订单人数（流量）',
                type: '0',
                precision: ',###',
                expression: 'arrange_ord_uv'
              },
              {
                code: 'sku_visit_rate',
                name: '商品访购率（流量）',
                type: '0',
                precision: '0.00%',
                expression: 'sku_visit_rate'
              },
              {
                code: 'arr_ord_cnt',
                name: '含商品订单数',
                type: '0',
                precision: ',###',
                expression: 'arr_ord_cnt'
              },
              {
                code: 'sale_cnt',
                name: '商品销量',
                type: '0',
                precision: ',###',
                expression: 'sale_cnt'
              },
              {
                code: 'original_price',
                name: '商品原价',
                type: '0',
                precision: ',###.00',
                expression: 'original_price'
              },
              {
                code: 'org_amt',
                name: '商品原价交易额',
                type: '0',
                precision: ',##0.00',
                expression: 'org_amt'
              },
              {
                code: 'actual_amt',
                name: '商品现价交易额',
                type: '0',
                precision: ',##0.00',
                expression: 'actual_amt'
              },
              {
                code: 'sku_discount_rate',
                name: '商品活动折扣力度',
                type: '0',
                precision: '0.00%',
                expression: 'sku_discount_rate'
              }
            ],
            download: {
              rows: 1000,
              action: '/api/v1/activity/portlet/download'
            },
            subTitle:
              '1、商品ID为商品的SKU ID，其最底层取的是流量埋点上报的spu_id（因为C端商品事件埋点多数上报的是spu_id），然后通过商品快照表关联取到SKU ID，由于存在一个spu_id对应多个sku_id的情况，所以商品相关指标会略有重复计算的情况，但对本产品的分析结果影响不大；2、由于性能限制，商品明细只取当天有动销的商品，且下载限制最多不能超过1000行，如需下载超过1000行还请通过 商品明细取数工具导出数据。',
            component: 'table',
            TABLE_NAME: 'MART_LINGSHOU.app_flow_sdk_aoi_ord_SKU_dd',
            pagination: {
              total: 20,
              pageNo: 1,
              pageSize: 25
            },
            needDimsGroup: true,
            MEASURES_BASIC: [],
            portlet_filter: [
              {
                id: 61913,
                hide: true,
                type: 'dimension',
                multi: true,
                title: '商品ID',
                filters: [
                  {
                    id: 619131,
                    title: '商品ID',
                    col_key: 'sku_id',
                    col_val: '',
                    virtual: true,
                    col_name: 'sku_name',
                    col_type: 'string',
                    default_selected: true
                  }
                ],
                component: 'selector',
                dimsGroupOnly: true
              },
              {
                id: 61915,
                type: 'dimension',
                multi: true,
                title: '商品类目',
                action: '/api/v1/report/dim/query',
                filter: [
                  {
                    id: 619151,
                    title: '全部',
                    extend: [
                      {
                        label: '全部',
                        value: ''
                      }
                    ],
                    format: '文本',
                    col_key: 'global_platform',
                    col_val: '0',
                    virtual: true,
                    col_name: '全部',
                    col_type: 'string',
                    selected: false,
                    default_selected: false
                  },
                  {
                    id: 619151,
                    title: '商品一级类目',
                    extend: [
                      {
                        label: '$dim.firstCategoryName',
                        value: '$dim.firstCategoryId'
                      }
                    ],
                    col_key: 'first_category_name',
                    col_val: '',
                    col_name: 'first_category_name',
                    col_type: 'string',
                    pageSelectable: true
                  },
                  {
                    id: 619152,
                    title: '商品二级类目',
                    extend: [
                      {
                        label: '$dim.secondCategoryName',
                        value: '$dim.secondCategoryId'
                      }
                    ],
                    col_key: 'second_category_name',
                    col_val: '',
                    col_name: 'second_category_name',
                    col_type: 'string',
                    pageSelectable: true
                  }
                ],
                component: 'selector',
                table_name: 'dim_aoi_product_category'
              },
              {
                id: 61917,
                link: 'https://bi.sankuai.com/dashboard/9672',
                text: '商品明细取数工具',
                component: 'button.float.right'
              },
              {
                id: 61911,
                deps: [
                  {
                    name: 619,
                    required: true
                  }
                ],
                type: 'measure',
                multi: true,
                title: '多指标',
                filter: [
                  {
                    id: 619113,
                    col_key: 'original_price',
                    col_val: '',
                    category: '价格',
                    col_name: '商品原价',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619114,
                    col_key: 'expose_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '曝光人数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619116,
                    col_key: 'cart_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '加购人数',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 619118,
                    col_key: 'submit_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '提单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 619119,
                    col_key: 'push_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '推单人数(流量)',
                    col_type: '',
                    default_selected: false
                  },
                  {
                    id: 619120,
                    col_key: 'arr_ord_uv',
                    col_val: '',
                    category: '用户指标',
                    col_name: '订单人数（流量）',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619121,
                    col_key: 'sku_visit_rate',
                    col_val: '',
                    category: '用户指标',
                    col_name: '商品访购率',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619127,
                    col_key: 'arr_ord_cnt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '含商品订单数',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619128,
                    col_key: 'sale_cnt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品销量',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619129,
                    col_key: 'org_amt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品原价交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619130,
                    col_key: 'actual_amt',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品现价交易额',
                    col_type: '',
                    default_selected: true
                  },
                  {
                    id: 619131,
                    col_key: 'sku_discount_rate',
                    col_val: '',
                    category: '交易指标',
                    col_name: '商品活动折扣力度',
                    col_type: '',
                    default_selected: true
                  }
                ],
                component: 'measure.float.right',
                type_name: '指标'
              },
              {
                id: 61916,
                type: 'search',
                filters: [
                  {
                    id: 619161,
                    col_key: 'sku_name',
                    col_val: '',
                    col_name: '商品名称',
                    col_rule: "sku_name like '%$COL_VAL$%'",
                    col_type: 'string',
                    default_selected: true
                  },
                  {
                    id: 619162,
                    col_key: 'sku_id',
                    col_val: '',
                    col_name: '商品ID',
                    col_type: 'int'
                  }
                ],
                component: 'search-input.float.right',
                type_name: '搜索'
              },
              {
                id: 61912,
                type: 'sort',
                filters: [
                  {
                    id: 619124,
                    col_key: 'expose_uv',
                    col_val: 'desc',
                    col_name: '曝光人数',
                    default_selected: true
                  },
                  {
                    id: 619126,
                    col_key: 'cart_uv',
                    col_val: 'desc',
                    col_name: '加购人数'
                  },
                  {
                    id: 619128,
                    col_key: 'submit_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '提单人数(流量)'
                  },
                  {
                    id: 619129,
                    col_key: 'push_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '推单人数(流量)'
                  },
                  {
                    id: 619130,
                    col_key: 'arr_ord_uv',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '订单人数（流量）'
                  },
                  {
                    id: 619131,
                    col_key: 'sku_visit_rate',
                    col_val: 'desc',
                    category: '用户指标',
                    col_name: '商品访购率'
                  },
                  {
                    id: 619137,
                    col_key: 'arr_ord_cnt',
                    col_val: 'desc',
                    col_name: '含商品订单数'
                  },
                  {
                    id: 619138,
                    col_key: 'sale_cnt',
                    col_val: 'desc',
                    col_name: '商品销量'
                  },
                  {
                    id: 619139,
                    col_key: 'org_amt',
                    col_val: 'desc',
                    col_name: '商品原价交易额'
                  },
                  {
                    id: 619140,
                    col_key: 'actual_amt',
                    col_val: 'desc',
                    col_name: '商品现价交易额'
                  },
                  {
                    id: 619131,
                    col_key: 'sku_discount_rate',
                    col_val: 'desc',
                    col_name: '商品活动折扣力度'
                  }
                ],
                type_name: '排序'
              }
            ],
            componentWrapper: 'layout-portlet'
          }
        ],
        component: 'layout-tab-card-pane'
      }
    ],
    allfilters: [
      [
        {
          id: 611,
          type: 'date',
          extend: 601,
          filters: [
            {
              id: 6111,
              model: 'radio',
              range: '-1,-1',
              title: '日',
              format: 'yyyyMMdd~yyyyMMdd',
              col_key: 'dt',
              col_val: '',
              default: 'yesterday',
              js_unit: 'd',
              col_name: 'dt_name',
              default_selected: true
            },
            {
              id: 6112,
              tips:
                '周日均指有当周有数据日期的均值，如某蜂窝当周只有3天有用户进店数据，那么其当周日均进店人数即为那3天的进店人数均值（总进店人数除以3，而非总进店人数除以7）',
              model: 'radio',
              range: '-1,-7',
              title: '周日均',
              format: 'yyyyMMdd~yyyyMMdd',
              col_key: 'wk',
              col_val: '',
              default: 'thisWeek',
              js_unit: 'w',
              col_name: 'wk_name'
            }
          ],
          component: 'date-unit-group',
          js_format: 'YYYYMMDD~YYYYMMDD',
          type_name: '日期',
          limitMaxDateExp: '$Today-1d',
          limitMinDateExp: '$Today-183d'
        }
      ],
      [
        {
          id: 612,
          type: 'dimension',
          multi: false,
          title: '城市',
          action: '/api/v1/report/dim/query',
          filters: [
            {
              id: 6121,
              title: '城市',
              extend: [
                {
                  label: '$dim.cityName',
                  value: '$dim.cityId'
                }
              ],
              col_key: 'city_id',
              col_val: '',
              col_name: 'city_name',
              col_type: 'int'
            }
          ],
          component: 'selector',
          table_name: 'dim_aoi_city'
        },
        {
          id: 613,
          deps: [
            {
              name: 612,
              required: true
            }
          ],
          type: 'dimension',
          multi: false,
          title: '联络点-蜂窝-AOI',
          action: '/api/v1/report/dim/pagination/search',
          paging: 'server',
          filters: [
            {
              id: 6131,
              title: '联络点',
              extend: [
                {
                  label: '$dim.concatPointName',
                  value: '$dim.concatPointId'
                }
              ],
              format: '文本',
              col_key: 'concat_point_id',
              col_val: '',
              col_name: 'concat_point_name',
              col_type: 'int',
              search_rule: "concat_point_name like '%$COL_VAL$%'",
              pageSelectable: true
            },
            {
              id: 6132,
              multi: true,
              title: '蜂窝',
              extend: [
                {
                  label: '$dim.aorName',
                  value: '$dim.aorId'
                }
              ],
              format: '文本',
              col_key: 'aor_id',
              col_val: '',
              col_name: 'aor_name',
              col_type: 'int',
              search_rule: "aor_name like '%$COL_VAL$%'",
              pageSelectable: true
            },
            {
              id: 6134,
              multi: true,
              title: 'AOI',
              extend: [
                {
                  label: '$dim.aoiName',
                  value: '$dim.aoiId'
                }
              ],
              format: '文本',
              col_key: 'aoi_id',
              col_val: '',
              col_name: 'aoi_name',
              col_type: 'string',
              search_rule: "aoi_name like '%$COL_VAL$%'",
              pageSelectable: true
            }
          ],
          component: 'selector',
          type_name: '维度',
          pagination: {
            total: 20,
            pageNo: 1,
            pageSize: 20
          },
          table_name: 'dim_d_city_point'
        },
        {
          id: 6101,
          type: 'dimension',
          multi: true,
          title: 'AOI类型',
          action: '/api/v1/report/dim/query',
          filter: [
            {
              id: 6061,
              title: '全部',
              format: '文本',
              col_key: 'global_platform',
              col_val: '0',
              virtual: true,
              col_name: '全部',
              col_type: 'string',
              selected: false,
              default_selected: false
            },
            {
              id: 6022,
              title: 'AOI类型',
              extend: [
                {
                  label: '$dim.aoiTypeName',
                  value: '$dim.aoiTypeId'
                }
              ],
              format: '文本',
              col_key: 'aoi_type',
              col_val: '',
              col_name: 'aoi_type',
              col_type: 'string',
              default_selected: false
            }
          ],
          component: 'selector',
          table_name: 'dim_flow_sdk_aoi_type'
        },
        {
          id: 6102,
          type: 'dimension',
          multi: true,
          title: '终端',
          action: '/api/v1/report/dim/query',
          filter: [
            {
              id: 61021,
              title: '全部',
              format: '文本',
              col_key: 'global_platform',
              col_val: '0',
              virtual: true,
              col_name: '主应用',
              col_type: 'string',
              selected: false,
              default_selected: false
            },
            {
              id: 61022,
              title: '终端大类',
              extend: [
                {
                  label: '$dim.terminalName',
                  value: '$dim.terminalId'
                }
              ],
              format: '文本',
              col_key: 'terminal_id',
              col_val: '',
              col_name: 'terminal_name',
              col_type: 'int',
              default_selected: false
            }
          ],
          component: 'selector',
          table_name: 'dim_aoi_terminal_view'
        },
        {
          id: 6103,
          info:
            '访问用户类型分为闪购潜新和闪购老客；这两种用户类型是通过判断用户访问时的设备（指设备号union_id，非用户登录帐号user_id）在统计日期之前有没有在闪购业务下过订单来划分的，即曾经有下过订单的设备为闪购老客，没有下过订单的设备为闪购潜新；由于user_id和union_id在历史上为多对多关系（同一个帐号会切换手机登录、一个手机上登录会多个不同帐号等），所以当一个用户帐号曾经在闪购业务下过订单但其当天使用的设备历史上没有在闪购下过单的时候，这个设备访问的时候就会把它算作闪购潜新，故报表里闪购潜新的订单人数>闪购潜新的闪购新客数（经营侧的闪购新客是通过user_id判断的）。同理，当用户设备选择闪购老客时，也会有相应的闪购新客数指标。 ',
          type: 'dimension',
          multi: true,
          title: '访问用户类型',
          action: '/api/v1/report/dim/query',
          filter: [
            {
              id: 6181,
              title: '全部',
              format: '文本',
              col_key: 'global_platform',
              col_val: '0',
              virtual: true,
              col_name: '全部',
              col_type: 'string',
              selected: false,
              default_selected: false
            },
            {
              id: 6182,
              title: '访问用户类型',
              extend: [
                {
                  label: '$dim.userTypeName',
                  value: '$dim.userTypeId'
                }
              ],
              format: '文本',
              col_key: 'user_type_id',
              col_val: '',
              col_name: 'user_type_name',
              col_type: 'int',
              default_selected: false
            }
          ],
          component: 'selector',
          table_name: 'dim_flow_sdk_user_type'
        },
        {
          id: 6104,
          type: 'dimension',
          multi: true,
          title: '运营组',
          action: '/api/v1/report/dim/query',
          filter: [
            {
              id: 6191,
              title: '全部',
              format: '文本',
              col_key: 'global_platform',
              col_val: '0',
              virtual: true,
              col_name: '全部运营组',
              col_type: 'string',
              selected: false,
              default_selected: false
            },
            {
              id: 6192,
              title: '运营组',
              extend: [
                {
                  label: '$dim.operateTypeName',
                  value: '$dim.operateTypeId'
                }
              ],
              format: '文本',
              col_key: 'operate_type_id',
              col_val: '',
              col_name: 'operate_type_name',
              col_type: 'int',
              default_selected: false
            }
          ],
          component: 'selector',
          table_name: 'dim_poi_operate_type_info_view'
        },
        {
          id: 6105,
          type: 'dimension',
          multi: true,
          title: '商家一级品类',
          action: '/api/v1/report/dim/query',
          filters: [
            {
              id: 6201,
              title: '全部',
              col_key: 'global_category',
              col_val: '0',
              virtual: true,
              col_name: '闪购整体',
              col_type: 'string',
              default_selected: true
            },
            {
              id: 6202,
              title: '商家一级品类',
              extend: [
                {
                  label: '$dim.firstTagName',
                  value: '$dim.firstTagId'
                }
              ],
              col_key: 'first_tag_id',
              col_name: 'first_tag_name',
              col_type: 'int'
            }
          ],
          component: 'selector',
          table_name: 'dim_poi_category_dict_view'
        }
      ]
    ],
    infomation: {
      id: 61901,
      list: [
        '由于门店和商品明细数据量比较大，为了保证查询性能，本页面只支持单个城市下的单个联络点查询，单个联络点下蜂窝和AOI可以多选，不支持跨城市和联络点选择蜂窝和AOI ；',
        '本产品用户所在的城市、联络点、蜂窝、AOI等均是基于用户设备打开app时在首页顶部地址栏的上报的位置进行计算的，如果记录不到地址栏上报的经纬度则取用户当前定位的经纬度；在流量日志里，访问门店、浏览商品、提交订单等各环节上报的地址栏经纬度都可能存在埋点质量问题（漏报、误报），导致有些时候会记录不到用户访问时选择的地址栏上报的经纬度；',
        '由于我们的用户会有异地访问的场景，即在当前位置（如锐创国际）打开app，但是会切换到其他地址（如将地址栏切换到居住的天通苑小区）进行访问、购买操作，埋点正常上报时本产品会将此次用户访问、购买行为发生的位置记录为天通苑小区，但如果出现地址栏经纬度上报异常的话，就会把此次用户访问、购买行为发生的位置记录为锐创国际 ；这样的话，在查看锐创国际AOI用户访问门店明细数据时就可能出现天通苑的一家水果店（锐创国际并不在该门店的配送覆盖范围内）。这种case非统计问题，主要是埋点上报问题，如发现此类问题可以反馈给我们，我们推动C端做埋点修复；基于上述原因，本产品过滤了用户访问时上报的地址栏经纬度缺失但其实时定位的经纬度所在城市和其访问门店所在城市不一致的访问记录；',
        '本页面的商品类目和商品明细中的最底层取的是流量埋点上报的spu_id（因为C端商品事件埋点多数上报的是spu_id），然后通过商品快照表关联取到sku_id和商品类目，由于存在一个spu_id对应多个sku_id的情况，所以商品相关指标会略有重复计算的情况，但对本产品的分析结果影响不大。'
      ],
      title: '【说明】',
      listType: 'number',
      component: 'infomation'
    }
  },
  OWNER: 'ligang24',
  title: '闪购进店用户分析',
  component: 'layout-tab-page'
}
