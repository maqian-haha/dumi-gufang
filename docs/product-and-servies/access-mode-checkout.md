---
group:
  title: 接入方式
  order: 0
order: 0
toc: content
---

# Checkout Page 模式

## 了解收银台模式

LianLian Global 提供 Checkout Page（又称收银台模式）集成选项重定向到连连全球收单托管的安全、预构建支付页面，支持商家一次集成多种支付方式。此模式仅需商家少量开发对接，付款人跳转至连连收银台页面进行付款。

## 模式优点

- 无需额外花费精力，利用连连收银台搭建适合的支付选项，集成全球多种主流支付方式；
- 对商户开发能力要求较低，只需要完成少量系统开发对接即可；
- 响应式设计，无缝适应任何屏幕尺寸，同时支持定制品牌、颜色等样式规则，以便您匹配网站视觉风格；
- 提供多种国际语言版本，提升更多用户付款体验；
- 商户无需 PCI 资质认证，降低 PCI-DSS 合规处理成本；

## 支持的支付方式

请查看 Checkout Page 模式是否支持您所需要的支付方式。

## 重点步骤说明

- 3、付款人发起支付后，商户服务端调用连连创单支付接口；
- 4、连连创单支付结果中包含连连收银台地址(payment_url)；
- 6、商户客户端跳转至连连收银台地址；
- 8 和 9、如果返回 3DS 挑战，付款人需要进行 3DS 安全认证操作；
- 10 和 11、如果支付成功，连连服务端通知支付成功，商户服务端返回成功接收；
- 12、连连收银台显示支付结果。如果支付失败，付款人可在连连收银台重试直至成功；
- 13、支付成功后，连连收银台跳转回商户支付成功页；

## test Tabs

<!-- ```json
[
  { "key": "1", "label": "Tab 1", "children": "Content of Tab Pane 1" },
  { "key": "2", "label": "Tab 2", "children": "Content of Tab Pane 2" },
  { "key": "3", "label": "Tab 3", "children": "Content of Tab Pane 3" }
]
``` -->
<MyTabs items='[{"key":"1","label":"Tab 1","children":"Content of Tab Pane 1"},{"key":"2","label":"Tab 2","children":"Content of Tab Pane 2"},{"key":"3","label":"Tab 3","children":"Content of Tab Pane 3"}]'></MyTabs>

## test API
