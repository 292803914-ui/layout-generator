export default function handler(req, res) {
  const { product, copy, style } = req.body;

  const layout = [
    {
      screen: 1,
      type: "hero",
      title: `${product}｜${style}`,
      desc: "首屏视觉冲击"
    },
    {
      screen: 2,
      type: "feature",
      title: "核心卖点提炼",
      desc: copy?.slice(0, 60)
    },
    {
      screen: 3,
      type: "scene",
      title: "场景展示",
      desc: "客厅 / 阳台 / 办公室 / 玄关"
    },
    {
      screen: 4,
      type: "detail",
      title: "产品细节展示",
      desc: "叶片 / 花型 / 枝干 / 根系"
    },
    {
      screen: 5,
      type: "trust",
      title: "品质保障",
      desc: "基地直发 / 成活率保障 / 售后承诺"
    }
  ];

  res.status(200).json({
    success: true,
    data: layout
  });
}
