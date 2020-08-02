export const testData = {
  id: 66,
  info: {
    portlets: [
      {
        id: 661,
        component: 'layout-form',
        operation: [
          {
            SQL:
              'SELECT id,alert_name,alert_condition,alert_receiver,alert_day,alert_time,frequency_type,ctime FROM alert_rule where id = $PRIMARY_KEY$',
            type: 'query',
            action: '/api/v1/ims/query',
            DATASOURCE: {
              DATA: 'seal',
              APP_ENV: 'prod'
            },
            actionMethod: 'get'
          },
          {
            type: 'submit',
            action: '/api/v1/ims/portlet/edit',
            ADD_SQL:
              "insert into alert_rule (alert_name,alert_condition,alert_day,alert_time,alert_receiver,frequency_type,creator,mtime) values(:alert_name,:alert_condition,:alert_day,:alert_time,:alert_receiver,:frequency_type,'$CURRENT_USER_MIS$','$CURRENT_TIME$')",
            EDIT_SQL:
              "update alert_rule set alert_name=:alert_name, alert_condition=:alert_condition, alert_receiver=:alert_receiver, alert_day=:alert_day,alert_time=:alert_time,frequency_type=:frequency_type, mtime='$CURRENT_TIME$', editor='$CURRENT_USER_MIS$' where id = $PRIMARY_KEY$",
            DATASOURCE: {
              DATA: 'seal',
              APP_ENV: 'prod'
            },
            successAction: {
              '652001': '#Date.now()'
            }
          }
        ],
        primaryKey: '$dim.661001',
        portlet_filters: [
          [
            {
              id: 6611,
              col_key: 'alert_name',
              col_type: 'string',
              uiConfig: {
                type: 'text',
                clearable: true
              },
              component: 'text',
              itemTitle: '*预警名称',
              validator: [
                {
                  ruleName: 'maxLength',
                  ruleConfig: 50,
                  triggerWhen: '',
                  alertMessage: '请简要填写“预警名称”，不超过50字符'
                }
              ],
              placeholder: '为预警起个名字，方便记忆与搜索',
              defaultValue: '',
              reviseMethod: ['trim']
            }
          ],
          [
            {
              id: 6612,
              col_key: 'alert_condition',
              col_type: 'string',
              component: 'layout-input-group-wrapper',
              itemTitle: '*预警规则',
              labelHTML:
                '<span style="font-size:14px;">场景 $index</span><span style="color:#999;font-size:12px;margin-left:20px;">同时满足以下<span style="font-weight:bold;margin-left:2px;">全部条件</span></span>',
              portlet_filters: [
                [
                  {
                    id: 66121,
                    type: 'measure',
                    filter: [
                      {
                        id: 661211,
                        col_key: 'alert_day',
                        col_val: 'workday',
                        col_name: '周一至周五',
                        col_type: '',
                        default_selected: true
                      },
                      {
                        id: 6612112,
                        col_key: 'alert_day',
                        col_val: 'everyday',
                        col_name: '每日',
                        col_type: ''
                      }
                    ],
                    col_key: 'alert_day',
                    col_type: 'string',
                    formItem: true,
                    uiConfig: {
                      float: 'left'
                    },
                    component: 'layout-row/measure',
                    outerFilters: [661211, 6612112]
                  },
                  {
                    id: 66122,
                    type: 'time-range',
                    col_key: 'alert_time',
                    col_type: 'string',
                    formItem: true,
                    uiConfig: {
                      end: {
                        default: '20:00',
                        pickerOptions: {
                          end: '24:00',
                          step: '00:30',
                          start: '00:00'
                        }
                      },
                      float: 'left',
                      start: {
                        default: '10:00',
                        pickerOptions: {
                          end: '24:00',
                          step: '00:30',
                          start: '00:00'
                        }
                      },
                      joinHTML: '至',
                      prefixHTML: '在',
                      suffixHTML:
                        '时段内，满足以下<span style="margin:0 2px;font-weight:bold;">任意场景</span>时会触发大象预警'
                    },
                    component: 'layout-row/time-select-range'
                  },
                  {
                    id: 66123,
                    uiConfig: {
                      float: 'right'
                    },
                    component: 'layout-row/operation-button-group',
                    operation: [
                      {
                        id: 661231,
                        type: '',
                        title: '添加场景',
                        uiType: 'primary',
                        clickAction: {
                          '6612#append': {}
                        },
                        minInterval: 0,
                        doNotModifyUrl: true
                      }
                    ]
                  }
                ],
                [
                  {
                    id: 66124,
                    type: 'dimension',
                    multi: false,
                    title: '商家运营归属',
                    action: '/api/v1/report/dim/query',
                    filters: [
                      {
                        id: 661241,
                        title: '闪购整体',
                        format: '文本',
                        col_key: 'global_owner',
                        col_val: '0',
                        virtual: true,
                        col_name: '闪购整体',
                        col_type: 'string',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661242,
                        title: '运营一级归属',
                        format: '文本',
                        col_key: 'first_owner_id',
                        col_val: '',
                        col_name: 'first_owner_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661243,
                        title: '运营二级归属',
                        format: '文本',
                        col_key: 'second_owner_id',
                        col_val: '',
                        col_name: 'second_owner_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661244,
                        title: '运营三级归属',
                        format: '文本',
                        col_key: 'third_owner_id',
                        col_val: '',
                        col_name: 'third_owner_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      }
                    ],
                    component: 'layout-input-group/selector',
                    table_name: 'dim_poi_operate_attributes_ext'
                  },
                  {
                    id: 66125,
                    type: 'dimension',
                    multi: false,
                    title: '物理城市/蜂窝',
                    action: '/api/v1/report/dim/query',
                    filters: [
                      {
                        id: 661251,
                        title: '全国',
                        format: '文本',
                        col_key: 'global_city',
                        col_val: '0',
                        virtual: true,
                        col_name: '全国',
                        col_type: 'string',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661252,
                        title: '城市',
                        format: '文本',
                        col_key: 'city_id',
                        col_val: '',
                        col_name: 'city_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661253,
                        title: '蜂窝',
                        format: '文本',
                        col_key: 'aor_id_p',
                        col_val: '',
                        col_name: 'aor_name_p',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      }
                    ],
                    component: 'layout-input-group/selector',
                    table_name: 'dim_poi_city_aor_info'
                  },
                  {
                    id: 66126,
                    type: 'dimension',
                    multi: false,
                    title: '平台/终端',
                    action: '/api/v1/report/dim/query',
                    filters: [
                      {
                        id: 661261,
                        title: '全部终端',
                        format: '文本',
                        col_key: 'global_platform',
                        col_val: '0',
                        virtual: true,
                        col_name: '全部终端',
                        col_type: 'string',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661262,
                        title: '平台',
                        format: '文本',
                        col_key: 'platform_id',
                        col_val: '',
                        col_name: 'platform_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      },
                      {
                        id: 661263,
                        title: '终端',
                        format: '文本',
                        col_key: 'terminal_id',
                        col_val: '',
                        col_name: 'terminal_name',
                        col_type: 'int',
                        selected: false,
                        default_selected: false
                      }
                    ],
                    component: 'layout-input-group/selector',
                    table_name: 'dim_ord_client_app'
                  },
                  {
                    id: 66127,
                    multi: false,
                    title: '指标',
                    width: '200px',
                    filters: [
                      {
                        id: 661271,
                        colData: [
                          {
                            col_val: 'gtv_order_num',
                            col_name: '订单数（GTV）',
                            default_selected: 'true'
                          },
                          {
                            col_val: 'gtv_order_num_dow_rate',
                            col_name: '订单数（GTV）周同比'
                          },
                          {
                            col_val: 'gtv_order_num_dod_rate',
                            col_name: '订单数（GTV）日环比'
                          },
                          {
                            col_val: 'gtv',
                            col_name: 'GTV'
                          },
                          {
                            col_val: 'gtv_dow_rate',
                            col_name: 'GTV周同比'
                          },
                          {
                            col_val: 'gtv_dod_rate',
                            col_name: 'GTV日环比'
                          },
                          {
                            col_val: 'gtv_sg_new_user_num',
                            col_name: '闪购新客数(GTV)'
                          },
                          {
                            col_val: 'gtv_sg_new_user_num_dow_rate',
                            col_name: '闪购新客数(GTV)周同比'
                          },
                          {
                            col_val: 'gtv_sg_new_user_num_dod_rate',
                            col_name: '闪购新客数(GTV)日环比'
                          },
                          {
                            col_val: 'nmd_disc_amt',
                            col_name: '美团补贴金额'
                          },
                          {
                            col_val: 'nmd_disc_amt_dow_rate',
                            col_name: '美团补贴金额周同比'
                          },
                          {
                            col_val: 'nmd_disc_amt_dod_rate',
                            col_name: '美团补贴金额日环比'
                          },
                          {
                            col_val: 'non_cust_rsn_abn_ord_num',
                            col_name: '非异订单数'
                          },
                          {
                            col_val: 'non_cust_rsn_abn_ord_num_dow_rate',
                            col_name: '非异订单数周同比'
                          },
                          {
                            col_val: 'non_cust_rsn_abn_ord_num_dod_rate',
                            col_name: '非异订单数日环比'
                          }
                        ],
                        col_key: 'dimension',
                        col_type: 'string'
                      }
                    ],
                    component: 'layout-input-group/selector'
                  },
                  {
                    id: 66128,
                    multi: false,
                    width: '96px',
                    filters: [
                      {
                        id: 661281,
                        colData: [
                          {
                            col_val: 'eq',
                            col_name: '等于'
                          },
                          {
                            col_val: 'lt',
                            col_name: '小于',
                            default_selected: 'true'
                          },
                          {
                            col_val: 'ngt',
                            col_name: '小于等于'
                          },
                          {
                            col_val: 'gt',
                            col_name: '大于'
                          },
                          {
                            col_val: 'nlt',
                            col_name: '大于等于'
                          }
                        ],
                        col_key: 'operator',
                        col_type: 'string'
                      }
                    ],
                    component: 'layout-input-group/selector',
                    searchable: false
                  },
                  {
                    id: 66129,
                    deps: [66127],
                    col_key: 'value',
                    col_type: 'int',
                    uiConfig: {
                      type: 'text',
                      style: {
                        width: '100px'
                      },
                      clearable: true
                    },
                    component: 'layout-input-group/text',
                    validator: [
                      {
                        ruleName: 'required',
                        ruleConfig: true,
                        triggerWhen: 'blur',
                        alertMessage: '请输入预警数值'
                      },
                      {
                        ruleName: 'maxLength',
                        ruleConfig: 15,
                        triggerWhen: 'blur',
                        alertMessage: '数值过大'
                      },
                      {
                        ruleName: 'isNumber',
                        ruleConfig: true,
                        triggerWhen: 'blur',
                        alertMessage: '仅支持数字（含小数）'
                      }
                    ],
                    watchRate: '#isRateSelect($deps.66127)',
                    placeholder: '数值',
                    defaultValue: '',
                    reviseMethod: ['trim', 'toNumber']
                  }
                ]
              ]
            }
          ],
          [
            {
              id: 66113,
              col_key: 'alert_receiver',
              col_type: 'string',
              uiConfig: {
                type: 'textarea',
                autosize: {
                  maxRows: 5,
                  minRows: 3
                }
              },
              component: 'text',
              itemTitle: '*预警接收人',
              validator: [
                {
                  ruleName: 'maxLength',
                  ruleConfig: 150,
                  triggerWhen: 'input',
                  alertMessage: '请填写必要预警用户名单，不超过150个字符'
                }
              ],
              placeholder: '填写预警用户mis号，多个用户可使用英文逗号分隔',
              defaultValue: ''
            }
          ],
          [
            {
              id: 66114,
              multi: false,
              width: '200px',
              filters: [
                {
                  id: 661111,
                  width: '250px',
                  colData: [
                    {
                      col_val: 'same_day_once',
                      col_name: '触发后当天不再重复预警',
                      default_selected: 'true'
                    },
                    {
                      col_val: 'same_1_hour_once',
                      col_name: '触发后1小时内不再重复预警'
                    },
                    {
                      col_val: 'same_2_hour_once',
                      col_name: '触发后2小时内不再重复预警'
                    },
                    {
                      col_val: 'same_4_hour_once',
                      col_name: '触发后4小时内不再重复预警'
                    },
                    {
                      col_val: 'same_8_hour_once',
                      col_name: '触发后8小时内不再重复预警'
                    },
                    {
                      col_val: 'no_limit',
                      col_name: '不限制频次'
                    }
                  ],
                  col_key: 'frequency_type',
                  col_type: 'string',
                  searchable: false
                }
              ],
              component: 'selector',
              itemTitle: '预警频次',
              searchable: false
            }
          ]
        ]
      }
    ]
  },
  title: '大象预警设置',
  component: 'layout-form-page',
  defaultRequired: true
}
