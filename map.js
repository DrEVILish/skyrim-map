YMaps.jQuery(function () {
  var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
  myData = new YMaps.TileDataSource("./tiles/tile-%z-%x-%y.jpg", true, true);
  myData.getTileUrl = function (tile, zoom) {
    return this.getTileUrlTemplate().replace(/%x/i, tile.x).replace(/%y/i, tile.y).replace(/%z/i, zoom)
  };
  MyLayer = function () {
    return new YMaps.Layer(myData)
  };
  YMaps.Layers.add("my#layer", MyLayer);
  map.setCenter(new YMaps.GeoPoint(-168.398, 84.235), 6, new YMaps.MapType(YMaps.jQuery.merge([], ["my#layer"]), "Skyrim", {
    minZoom: 6,
    maxZoom: 10
  }));
  map.enableScrollZoom();
  map.addControl(new YMaps.Zoom({
    noTips: true
  }), new YMaps.ControlPosition(YMaps.ControlPosition.TOP_LEFT, new YMaps.Point(5, 240)));

  //Стили иконок
  for (var i = 1; i <= 30; i++) {
    YMaps.Styles.add('my#style' + i, {
      iconStyle: {
        href: './icons/' + i + '.png',
        size: new YMaps.Point(32, 32),
        offset: new YMaps.Point(-15, -20)
      }
    })
  };
  
  //Группы
  groups = [
    createGroup("Лагерь", 1, [
      createPlacemark(new YMaps.GeoPoint(-174.982, 84.522), "Высота Драконий Мост"),
      createPlacemark(new YMaps.GeoPoint(-176.571, 84.176), "Картспайр"),
      createPlacemark(new YMaps.GeoPoint(-176.387, 84.195), "Лагерь Картспайр"),
      createPlacemark(new YMaps.GeoPoint(-168.219, 84.248), "Лагерь Чистых родников"),
      createPlacemark(new YMaps.GeoPoint(-177.786, 84.470), "Оплот Друадах"),
      createPlacemark(new YMaps.GeoPoint(-174.596, 84.108), "Оплот Змеиный Утес"),
      createPlacemark(new YMaps.GeoPoint(-173.671, 84.406), "Теснина грабителя"),
      createPlacemark(new YMaps.GeoPoint(-173.158, 83.743), "Хребет Острие Ножа")
    ], "my#style1"),

    createGroup("Пещера", 2, [
      createPlacemark(new YMaps.GeoPoint(-174.288, 84.825), "Воронья нора"),
      createPlacemark(new YMaps.GeoPoint(-173.572, 83.811), "Гленморильский ковен"),
      createPlacemark(new YMaps.GeoPoint(-164.559, 84.133), "Глубокая Тень"),
      createPlacemark(new YMaps.GeoPoint(-168.241, 83.589), "Грот Серая Вода"),
      createPlacemark(new YMaps.GeoPoint(-172.908, 84.892), "Грот Сломанное Весло"),
      createPlacemark(new YMaps.GeoPoint(-172.238, 84.857), "Грот Соленая Вода"),
      createPlacemark(new YMaps.GeoPoint(-171.214, 83.919), "Грот Утопленника"),
      createPlacemark(new YMaps.GeoPoint(-164.167, 84.432), "Забытая пещера"),
      createPlacemark(new YMaps.GeoPoint(-166.473, 84.478), "Закатная расщелина"),
      createPlacemark(new YMaps.GeoPoint(-165.882, 84.771), "Ингвильд"),
      createPlacemark(new YMaps.GeoPoint(-175.289, 84.277), "Каирн Мятежника"),
      createPlacemark(new YMaps.GeoPoint(-171.565, 83.566), "Каирн Холдира"),
      createPlacemark(new YMaps.GeoPoint(-160.989, 83.733), "Камнепадная пещера"),
      createPlacemark(new YMaps.GeoPoint(-160.083, 83.411), "Кристаллическая пещера"),
      createPlacemark(new YMaps.GeoPoint(-170.882, 84.567), "Логово Моварта"),
      createPlacemark(new YMaps.GeoPoint(-171.645, 84.151), "Логово Плута"),
      createPlacemark(new YMaps.GeoPoint(-175.755, 84.173), "Логово Сольюнда"),
      createPlacemark(new YMaps.GeoPoint(-158.423, 83.479), "Лощина Сломанный Шлем"),
      createPlacemark(new YMaps.GeoPoint(-164.650, 83.683), "Медовая пещера"),
      createPlacemark(new YMaps.GeoPoint(-177.315, 84.734), "Морозная пещера"),
      createPlacemark(new YMaps.GeoPoint(-174.798, 83.992), "Мрачный Предел"),
      createPlacemark(new YMaps.GeoPoint(-172.290, 83.853), "Мшистая пещера"),
      createPlacemark(new YMaps.GeoPoint(-163.508, 84.573), "Неприметное убежище"),
      createPlacemark(new YMaps.GeoPoint(-176.428, 84.792), "Нижняя Отвесная нора"),
      createPlacemark(new YMaps.GeoPoint(-177.094, 84.122), "Озерный утес"),
      createPlacemark(new YMaps.GeoPoint(-176.171, 84.231), "Оплот Красный Орел"),
      createPlacemark(new YMaps.GeoPoint(-176.079, 84.490), "Оплот Прыжок Брюсы"),
      createPlacemark(new YMaps.GeoPoint(-172.943, 84.349), "Оротхейм"),
      createPlacemark(new YMaps.GeoPoint(-176.322, 84.765), "Отвесная нора"),
      createPlacemark(new YMaps.GeoPoint(-160.356, 84.127), "Откос Крегвеллоу"),
      createPlacemark(new YMaps.GeoPoint(-164.432, 84.387), "Пещера Бронзовая Вода"),
      createPlacemark(new YMaps.GeoPoint(-174.549, 84.752), "Пещера Волчий Череп"),
      createPlacemark(new YMaps.GeoPoint(-163.354, 84.257), "Пещера Говорящие Холмы"),
      createPlacemark(new YMaps.GeoPoint(-158.284, 83.637), "Пещера Желтый Камень"),
      createPlacemark(new YMaps.GeoPoint(-176.311, 84.696), "Пещера Заблудшее Эхо"),
      createPlacemark(new YMaps.GeoPoint(-173.396, 84.814), "Пещера Зеленая Тень"),
      createPlacemark(new YMaps.GeoPoint(-159.298, 83.997), "Пещера Каменный Ручей"),
      createPlacemark(new YMaps.GeoPoint(-159.807, 83.940), "Пещера Крегслейн"),
      createPlacemark(new YMaps.GeoPoint(-162.346, 84.107), "Пещера Кронвангр"),
      createPlacemark(new YMaps.GeoPoint(-175.642, 84.654), "Пещера Лунный Бор"),
      createPlacemark(new YMaps.GeoPoint(-161.907, 84.494), "Пещера Мертворожденного"),
      createPlacemark(new YMaps.GeoPoint(-166.409, 84.206), "Пещера Мерцающий Туман"),
      createPlacemark(new YMaps.GeoPoint(-177.112, 84.279), "Пещера Отвесный Утес"),
      createPlacemark(new YMaps.GeoPoint(-172.025, 84.055), "Пещера Сломанный Клык"),
      createPlacemark(new YMaps.GeoPoint(-164.940, 83.821), "Пещера Сосновый Пик"),
      createPlacemark(new YMaps.GeoPoint(-159.075, 83.870), "Пещера Толвальда"),
      createPlacemark(new YMaps.GeoPoint(-166.029, 83.651), "Пещера Хеймара"),
      createPlacemark(new YMaps.GeoPoint(-165.282, 84.666), "Пещера Хоба"),
      createPlacemark(new YMaps.GeoPoint(-160.976, 84.639), "Пещера Холодный Берег"),
      createPlacemark(new YMaps.GeoPoint(-162.631, 84.897), "Пост Септимия Сегония"),
      createPlacemark(new YMaps.GeoPoint(-166.723, 84.056), "Приречная застава"),
      createPlacemark(new YMaps.GeoPoint(-175.513, 84.428), "Пристанище Лжеца"),
      createPlacemark(new YMaps.GeoPoint(-169.924, 84.186), "Приют Редорана"),
      createPlacemark(new YMaps.GeoPoint(-174.865, 84.473), "Провал Сквозняков"),
      createPlacemark(new YMaps.GeoPoint(-172.216, 84.382), "Разводная пещера"),
      createPlacemark(new YMaps.GeoPoint(-172.507, 83.917), "Разделенное ущелье"),
      createPlacemark(new YMaps.GeoPoint(-162.371, 84.009), "Святилище Великого Древа"),
      createPlacemark(new YMaps.GeoPoint(-170.404, 83.930), "Северный Ноголомный проход"),
      createPlacemark(new YMaps.GeoPoint(-166.317, 84.124), "Серозимняя застава"),
      createPlacemark(new YMaps.GeoPoint(-168.993, 83.593), "Сквозняковый проход"),
      createPlacemark(new YMaps.GeoPoint(-159.409, 83.490), "Соловьиный зал"),
      createPlacemark(new YMaps.GeoPoint(-163.775, 83.966), "Убежище Потерянный Нож"),
      createPlacemark(new YMaps.GeoPoint(-176.717, 84.073), "Утесная пещера"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.872), "Черный проход"),
      createPlacemark(new YMaps.GeoPoint(-178.041, 84.020), "Чистый ручей"),
      createPlacemark(new YMaps.GeoPoint(-162.605, 83.810), "Щелкающая пещера"),
      createPlacemark(new YMaps.GeoPoint(-167.345, 83.496), "Южное святилище"),
      createPlacemark(new YMaps.GeoPoint(-170.221, 83.848), "Южный Ноголомный проход")
    ], "my#style2"),

    createGroup("Поляна", 3, [
      createPlacemark(new YMaps.GeoPoint(-160.498, 83.669), "Осенняя поляна"),
      createPlacemark(new YMaps.GeoPoint(-163.027, 84.195), "Пруд Глаз Мары"),
      createPlacemark(new YMaps.GeoPoint(-175.195, 84.669), "Пруд Чистых сосен"),
      createPlacemark(new YMaps.GeoPoint(-161.673, 83.820), "Чистое озеро")
    ], "my#style3"),

    createGroup("Пристань", 4, [
      createPlacemark(new YMaps.GeoPoint(-172.903, 84.683), "Склад Восточной Имперской компании")
    ], "my#style4"),

    createGroup("Камнь-хранитель", 5, [
      createPlacemark(new YMaps.GeoPoint(-161.778, 83.974), "Камень Атронаха"),
      createPlacemark(new YMaps.GeoPoint(-165.005, 84.719), "Камень Башни"),
      createPlacemark(new YMaps.GeoPoint(-160.610, 84.777), "Камень Змея"),
      createPlacemark(new YMaps.GeoPoint(-174.542, 84.770), "Камень Коня"),
      createPlacemark(new YMaps.GeoPoint(-170.943, 83.815), "Камень Леди"),
      createPlacemark(new YMaps.GeoPoint(-168.794, 84.456), "Камень Лорда"),
      createPlacemark(new YMaps.GeoPoint(-177.593, 84.257), "Камень Любовника"),
      createPlacemark(new YMaps.GeoPoint(-166.275, 84.110), "Камень Ритуала"),
      createPlacemark(new YMaps.GeoPoint(-159.535, 83.474), "Камень Тени"),
      createPlacemark(new YMaps.GeoPoint(-172.273, 84.583), "Камень Ученика"),
      createPlacemark(new YMaps.GeoPoint(-168.981, 83.790), "Камни-хранители")
    ], "my#style5"),

    createGroup("Логово дракона", 6, [
      createPlacemark(new YMaps.GeoPoint(-169.439, 84.412), "Алтарь Рожденного Небом"),
      createPlacemark(new YMaps.GeoPoint(-160.518, 83.840), "Вершина Северный Ветер"),
      createPlacemark(new YMaps.GeoPoint(-159.372, 83.387), "Высота Откушенный Язык"),
      createPlacemark(new YMaps.GeoPoint(-163.785, 84.512), "Гора Антор"),
      createPlacemark(new YMaps.GeoPoint(-165.284, 84.254), "Двуглавый пик"),
      createPlacemark(new YMaps.GeoPoint(-177.109, 84.425), "Кратер Драконий Зуб"),
      createPlacemark(new YMaps.GeoPoint(-164.381, 83.555), "Осенняя сторожевая башня"),
      createPlacemark(new YMaps.GeoPoint(-171.470, 84.347), "Пик Древних"),
      createPlacemark(new YMaps.GeoPoint(-161.683, 84.071), "Скелетный гребень"),
      createPlacemark(new YMaps.GeoPoint(-169.215, 83.549), "Ход Древних")
    ], "my#style6"),

    createGroup("Двемерские руины", 7, [
      createPlacemark(new YMaps.GeoPoint(-162.348, 83.491), "Аванчнзел"),
      createPlacemark(new YMaps.GeoPoint(-164.743, 84.568), "Альфтанд"),
      createPlacemark(new YMaps.GeoPoint(-167.656, 84.402), "Башня Мзарк"),
      createPlacemark(new YMaps.GeoPoint(-178.651, 84.391), "Бтардамз"),
      createPlacemark(new YMaps.GeoPoint(-164.802, 84.282), "Иркнтанд"),
      createPlacemark(new YMaps.GeoPoint(-158.408, 83.971), "Кагрензел"),
      createPlacemark(new YMaps.GeoPoint(-168.860, 84.616), "Мзинчалефт"),
      createPlacemark(new YMaps.GeoPoint(-159.642, 84.061), "Мзулфт"),
      createPlacemark(new YMaps.GeoPoint(-164.180, 84.250), "Ральдбтхар")
    ], "my#style7"),

    createGroup("Ферма", 8, [
      createPlacemark(new YMaps.GeoPoint(-159.789, 83.617), "Веселая ферма"),
      createPlacemark(new YMaps.GeoPoint(-160.720, 84.341), "Ферма \"Остролист\""),
      createPlacemark(new YMaps.GeoPoint(-160.894, 84.330), "Ферма Хлаалу")
    ], "my#style8"),

    createGroup("Форт", 9, [
      createPlacemark(new YMaps.GeoPoint(-160.991, 83.423), "Башня Светотьмы"),
      createPlacemark(new YMaps.GeoPoint(-163.513, 84.175), "Висельная скала"),
      createPlacemark(new YMaps.GeoPoint(-166.153, 83.930), "Высокий Хротгар"),
      createPlacemark(new YMaps.GeoPoint(-170.875, 83.851), "Глубины Илиналты"),
      createPlacemark(new YMaps.GeoPoint(-165.940, 84.581), "Дрифтшейд - Приют"),
      createPlacemark(new YMaps.GeoPoint(-169.006, 84.056), "Западная сторожевая башня"),
      createPlacemark(new YMaps.GeoPoint(-160.957, 83.586), "Зуб Фалдара"),
      createPlacemark(new YMaps.GeoPoint(-172.209, 83.615), "Крепость Треснувший Бивень"),
      createPlacemark(new YMaps.GeoPoint(-165.550, 84.192), "Крепость Феллглоу"),
      createPlacemark(new YMaps.GeoPoint(-169.102, 83.471), "Кровавый Трон"),
      createPlacemark(new YMaps.GeoPoint(-162.465, 84.254), "Морвунскар"),
      createPlacemark(new YMaps.GeoPoint(-177.199, 84.778), "Северная сторожевая крепость"),
      createPlacemark(new YMaps.GeoPoint(-175.224, 84.362), "Сломанная башня"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.654), "Тревская застава"),
      createPlacemark(new YMaps.GeoPoint(-161.463, 83.939), "Туманная застава"),
      createPlacemark(new YMaps.GeoPoint(-163.478, 84.008), "Форт Амол"),
      createPlacemark(new YMaps.GeoPoint(-169.906, 84.097), "Форт Греймур"),
      createPlacemark(new YMaps.GeoPoint(-159.729, 83.711), "Форт Гринвол"),
      createPlacemark(new YMaps.GeoPoint(-167.572, 84.485), "Форт Дунстад"),
      createPlacemark(new YMaps.GeoPoint(-162.883, 84.431), "Форт Кастав"),
      createPlacemark(new YMaps.GeoPoint(-167.261, 83.590), "Форт Нойград"),
      createPlacemark(new YMaps.GeoPoint(-173.125, 83.993), "Форт Сангард"),
      createPlacemark(new YMaps.GeoPoint(-172.406, 84.521), "Форт Сноухок"),
      createPlacemark(new YMaps.GeoPoint(-166.688, 84.536), "Форт Феллхаммер"),
      createPlacemark(new YMaps.GeoPoint(-175.435, 84.765), "Форт Храгстад"),
      createPlacemark(new YMaps.GeoPoint(-176.845, 84.452), "Хармугстал"),
      createPlacemark(new YMaps.GeoPoint(-166.844, 84.693), "Храм Призывателей Ночи")                	
    ], "my#style9"),

    createGroup("Лагерь великанов", 10, [
      createPlacemark(new YMaps.GeoPoint(-165.317, 84.315), "Арочный перевал"),
      createPlacemark(new YMaps.GeoPoint(-169.053, 84.145), "Водоем Холодный Ветер"),
      createPlacemark(new YMaps.GeoPoint(-166.939, 84.363), "Дом Буранов"),
      createPlacemark(new YMaps.GeoPoint(-167.915, 84.582), "Красный перевал"),
      createPlacemark(new YMaps.GeoPoint(-173.153, 84.266), "Лагерь Говорящий Камень"),
      createPlacemark(new YMaps.GeoPoint(-162.868, 84.058), "Лагерь Сломанная Нога"),
      createPlacemark(new YMaps.GeoPoint(-171.336, 84.037), "Лагерь Сонное Дерево"),
      createPlacemark(new YMaps.GeoPoint(-161.097, 84.083), "Паровой лагерь"),
      createPlacemark(new YMaps.GeoPoint(-169.207, 83.987), "Поцелуй Секунды"),
      createPlacemark(new YMaps.GeoPoint(-163.953, 84.110), "Седловая скала"),
      createPlacemark(new YMaps.GeoPoint(-165.042, 84.082), "Скала Гулдун"),
      createPlacemark(new YMaps.GeoPoint(-168.173, 84.389), "Утес Каменный Холм")
    ], "my#style10"),

    createGroup("Роща", 11, [
      createPlacemark(new YMaps.GeoPoint(-171.981, 83.739), "Вечнозеленая роща"),
      createPlacemark(new YMaps.GeoPoint(-170.656, 84.229), "Нора Зеленый Ручей"),
      createPlacemark(new YMaps.GeoPoint(-161.549, 84.119), "Роща Ведьмин Туман"),
      createPlacemark(new YMaps.GeoPoint(-158.282, 83.638), "Роща Гигантов"),
      createPlacemark(new YMaps.GeoPoint(-165.826, 84.382), "Скрытая роща")
    ], "my#style11"),

    createGroup("Имперский лагерь", 12, [
      createPlacemark(new YMaps.GeoPoint(-170.252, 84.581), "Хьялмарк - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-169.259, 84.697), "Белый Берег - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-166.182, 84.667), "Винтерхолд - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-178.037, 84.336), "Предел - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-172.561, 84.179), "Вайтран - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-159.344, 84.026), "Истмарк - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-172.962, 83.838), "Фолкрит - Имперский лагерь"),
      createPlacemark(new YMaps.GeoPoint(-164.618, 83.615), "Рифт - Имперский лагерь")
    ], "my#style12"),

    createGroup("Достопримечательность", 13, [
      createPlacemark(new YMaps.GeoPoint(-166.006, 83.857), "Глотка Мира"),
      createPlacemark(new YMaps.GeoPoint(-176.963, 84.070), "Гнездо Ветров Предела"),
      createPlacemark(new YMaps.GeoPoint(-166.617, 84.405), "Камни Вейнон"),
      createPlacemark(new YMaps.GeoPoint(-172.612, 84.088), "Монумент Гьюкара"),
      createPlacemark(new YMaps.GeoPoint(-167.103, 83.730), "Одинокая скала"),
      createPlacemark(new YMaps.GeoPoint(-178.627, 84.474), "Переправа Глубинного Народа"),
      createPlacemark(new YMaps.GeoPoint(-174.292, 83.931), "Пик Прыжок Барда"),
      createPlacemark(new YMaps.GeoPoint(-164.236, 83.620), "Руины Бталфта"),
      createPlacemark(new YMaps.GeoPoint(-160.436, 83.387), "Руины Ркунда"),
      createPlacemark(new YMaps.GeoPoint(-176.998, 84.184), "Храм Небесной гавани")
    ], "my#style13"),

    createGroup("Маяк", 14, [
      createPlacemark(new YMaps.GeoPoint(-165.490, 84.634), "Инеевый маяк"),
      createPlacemark(new YMaps.GeoPoint(-171.825, 84.837), "Солитьюд - Маяк")
    ], "my#style14"),

    createGroup("Шахта", 15, [
      createPlacemark(new YMaps.GeoPoint(-173.587, 83.915), "Желчная шахта"),
      createPlacemark(new YMaps.GeoPoint(-169.338, 84.502), "Каменные холмы"),
      createPlacemark(new YMaps.GeoPoint(-162.076, 84.567), "Свистящая шахта"),
      createPlacemark(new YMaps.GeoPoint(-160.144, 84.164), "Сумрачная шахта"),
      createPlacemark(new YMaps.GeoPoint(-168.617, 83.795), "Факельная шахта"),
      createPlacemark(new YMaps.GeoPoint(-162.254, 83.938), "Черный Брод"),
      createPlacemark(new YMaps.GeoPoint(-177.484, 84.231), "Шахта Колскеггр"),
      createPlacemark(new YMaps.GeoPoint(-178.487, 84.131), "Шахта Левая Рука"),
      createPlacemark(new YMaps.GeoPoint(-158.048, 83.604), "Шахта Потерянный Шанс"),
      createPlacemark(new YMaps.GeoPoint(-160.654, 83.873), "Шахта Северный Ветер")
    ], "my#style15"),

    createGroup("Руины", 16, [
      createPlacemark(new YMaps.GeoPoint(-163.823, 84.439), "Высота Йоргрим"),
      createPlacemark(new YMaps.GeoPoint(-176.645, 84.274), "Наблюдательный пост \"Четыре Черепа\""),
      createPlacemark(new YMaps.GeoPoint(-169.834, 84.406), "Потерянный Валкигг"),
      createPlacemark(new YMaps.GeoPoint(-170.188, 84.263), "Привал Хамвира"),
      createPlacemark(new YMaps.GeoPoint(-171.576, 83.673), "Придорожные руины"),
      createPlacemark(new YMaps.GeoPoint(-161.943, 84.595), "Приют Подмастерья"),
      createPlacemark(new YMaps.GeoPoint(-170.156, 84.541), "Руины Кьенстаг"),
      createPlacemark(new YMaps.GeoPoint(-162.318, 84.795), "Руины Небесного Храма"),
      createPlacemark(new YMaps.GeoPoint(-168.033, 84.653), "Руины Оберег Ветров"),
      createPlacemark(new YMaps.GeoPoint(-167.296, 83.781), "Северная горная застава")
    ], "my#style16"),

    createGroup("Нордские руины", 17, [
      createPlacemark(new YMaps.GeoPoint(-162.822, 83.554), "Ангарвунд"),
      createPlacemark(new YMaps.GeoPoint(-159.342, 83.936), "Ансилвунд"),
      createPlacemark(new YMaps.GeoPoint(-175.601, 83.953), "Валтум"),
      createPlacemark(new YMaps.GeoPoint(-178.805, 84.057), "Ведьмин оплот"),
      createPlacemark(new YMaps.GeoPoint(-176.182, 84.585), "Ведьмино гнездо"),
      createPlacemark(new YMaps.GeoPoint(-169.230, 83.886), "Ветреный пик"),
      createPlacemark(new YMaps.GeoPoint(-165.440, 83.544), "Ветровая Дуга"),
      createPlacemark(new YMaps.GeoPoint(-168.563, 84.321), "Волундруд"),
      createPlacemark(new YMaps.GeoPoint(-176.382, 84.650), "Вольскигге"),
      createPlacemark(new YMaps.GeoPoint(-163.814, 84.793), "Гробница Исграмора"),
      createPlacemark(new YMaps.GeoPoint(-164.615, 84.038), "Гробница Хилгрунда"),
      createPlacemark(new YMaps.GeoPoint(-170.113, 84.244), "Древний каирн"),
      createPlacemark(new YMaps.GeoPoint(-164.082, 83.760), "Зал Гейрмунда"),
      createPlacemark(new YMaps.GeoPoint(-166.004, 84.323), "Корваньюнд"),
      createPlacemark(new YMaps.GeoPoint(-165.099, 84.464), "Курган Железный"),
      createPlacemark(new YMaps.GeoPoint(-160.249, 84.405), "Курган Ингола"),
      createPlacemark(new YMaps.GeoPoint(-164.669, 83.773), "Курган Погребальный Огонь"),
      createPlacemark(new YMaps.GeoPoint(-170.441, 84.376), "Лабиринтиан"),
      createPlacemark(new YMaps.GeoPoint(-168.900, 84.241), "Лагерь Тихих Лун"),
      createPlacemark(new YMaps.GeoPoint(-176.523, 84.581), "Лесной оплот"),
      createPlacemark(new YMaps.GeoPoint(-171.672, 84.292), "Обитель Раннвейг"),
      createPlacemark(new YMaps.GeoPoint(-174.197, 83.926), "Оплот Потерянная Долина"),
      createPlacemark(new YMaps.GeoPoint(-179.016, 84.299), "Рагнвальд"),
      createPlacemark(new YMaps.GeoPoint(-170.191, 84.720), "Руины Высоких Врат"),
      createPlacemark(new YMaps.GeoPoint(-163.959, 84.646), "Саартал"),
      createPlacemark(new YMaps.GeoPoint(-170.677, 83.715), "Северный бастион Кричащий Ветер"),
      createPlacemark(new YMaps.GeoPoint(-170.570, 83.684), "Южный бастион Кричащий Ветер"),
      createPlacemark(new YMaps.GeoPoint(-165.794, 84.449), "Серебряное логово"),
      createPlacemark(new YMaps.GeoPoint(-160.964, 84.537), "Снежная Завеса - Святилище"),
      createPlacemark(new YMaps.GeoPoint(-173.144, 83.656), "Сумеречная гробница"),
      createPlacemark(new YMaps.GeoPoint(-172.906, 84.448), "Упокоище"),
      createPlacemark(new YMaps.GeoPoint(-170.413, 84.626), "Устенгрев"),
      createPlacemark(new YMaps.GeoPoint(-171.813, 84.645), "Фолгунтур"),
      createPlacemark(new YMaps.GeoPoint(-158.882, 83.453), "Форелхост"),
      createPlacemark(new YMaps.GeoPoint(-168.548, 84.534), "Фростмир")
    ], "my#style17"),

    createGroup("Нордская башня", 18, [
      createPlacemark(new YMaps.GeoPoint(-164.975, 84.137), "Башни Валтейм"),
      createPlacemark(new YMaps.GeoPoint(-172.334, 83.773), "Башня Баннермист"),
      createPlacemark(new YMaps.GeoPoint(-174.765, 83.945), "Башня Кредлстоун"),
      createPlacemark(new YMaps.GeoPoint(-163.555, 83.800), "Нилхейм"),
      createPlacemark(new YMaps.GeoPoint(-175.754, 84.302), "Разделенные башни"),
      createPlacemark(new YMaps.GeoPoint(-179.261, 84.030), "Старушечья скала"),
      createPlacemark(new YMaps.GeoPoint(-170.147, 83.616), "Теневая башня"),
      createPlacemark(new YMaps.GeoPoint(-175.062, 84.225), "Утес Холодный Ветер"),
      createPlacemark(new YMaps.GeoPoint(-167.970, 83.727), "Южная горная застава")
    ], "my#style18"),

    createGroup("Крепость орков", 19, [
      createPlacemark(new YMaps.GeoPoint(-177.332, 84.008), "Душник-Йал"),
      createPlacemark(new YMaps.GeoPoint(-161.479, 83.468), "Ларгашбур"),
      createPlacemark(new YMaps.GeoPoint(-177.683, 84.594), "Мор Казгур"),
      createPlacemark(new YMaps.GeoPoint(-160.266, 84.199), "Нарзулбур")
    ], "my#style19"),

    createGroup("Проход", 20, [
      createPlacemark(new YMaps.GeoPoint(-164.845, 84.492), "Перевал Странника"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.345), "Северный проход Холодных Скал"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.326), "Южный проход Холодных Скал")
    ], "my#style20"),

    createGroup("Поселение", 21, [
      createPlacemark(new YMaps.GeoPoint(-167.352, 84.759), "Данстарское убежище"),
      createPlacemark(new YMaps.GeoPoint(-167.384, 84.035), "Медоварня Хоннинга"),
      createPlacemark(new YMaps.GeoPoint(-160.355, 83.573), "Поместье \"Златоцвет\""),
      createPlacemark(new YMaps.GeoPoint(-158.035, 83.559), "Резиденция \"Черный Вереск\""),
      createPlacemark(new YMaps.GeoPoint(-161.423, 84.213), "Роща Кин"),
      createPlacemark(new YMaps.GeoPoint(-175.487, 84.095), "Старый Хролдан"),
      createPlacemark(new YMaps.GeoPoint(-165.041, 84.408), "Таверна \"Ночные ворота\""),
      createPlacemark(new YMaps.GeoPoint(-173.636, 84.764), "Талморское посольство"),
      createPlacemark(new YMaps.GeoPoint(-161.286, 84.285), "Ферма \"Кружка Бренди\""),
      createPlacemark(new YMaps.GeoPoint(-171.477, 83.641), "Убежище Темного Братства")
    ], "my#style21"),

    createGroup("Хижина", 22, [
      createPlacemark(new YMaps.GeoPoint(-175.211, 84.458), "Горный приют"),
      createPlacemark(new YMaps.GeoPoint(-170.835, 84.295), "Дом Дреласа"),
      createPlacemark(new YMaps.GeoPoint(-174.303, 84.755), "Железное убежище"),
      createPlacemark(new YMaps.GeoPoint(-171.053, 84.660), "Заброшенная хижина"),
      createPlacemark(new YMaps.GeoPoint(-168.019, 84.515), "Зал Дозора"),
      createPlacemark(new YMaps.GeoPoint(-170.583, 83.506), "Лагерь Анги"),
      createPlacemark(new YMaps.GeoPoint(-172.286, 83.819), "Охотничий привал"),
      createPlacemark(new YMaps.GeoPoint(-160.004, 84.354), "Пост Предателя"),
      createPlacemark(new YMaps.GeoPoint(-162.287, 84.180), "Речная хижина"),
      createPlacemark(new YMaps.GeoPoint(-169.651, 83.687), "Сосновая застава"),
      createPlacemark(new YMaps.GeoPoint(-173.145, 84.391), "Хибара краболова"),
      createPlacemark(new YMaps.GeoPoint(-165.118, 83.639), "Хижина алхимика"),
      createPlacemark(new YMaps.GeoPoint(-169.074, 83.830), "Хижина Анис"),
      createPlacemark(new YMaps.GeoPoint(-174.271, 84.241), "Хижина Лунда"),
      createPlacemark(new YMaps.GeoPoint(-173.173, 84.565), "Хижина Мико"),
      createPlacemark(new YMaps.GeoPoint(-163.726, 83.531), "Хижина Фроки")              	
    ], "my#style22"),

    createGroup("Корабль/Место кораблекрушения", 23, [
      createPlacemark(new YMaps.GeoPoint(-172.034, 84.733), "\"Катария\""),
      createPlacemark(new YMaps.GeoPoint(-172.071, 84.805), "\"Привередливый слоад\""),
      createPlacemark(new YMaps.GeoPoint(-166.252, 84.815), "Каприз Хелы"),
      createPlacemark(new YMaps.GeoPoint(-171.011, 84.735), "Место крушения \"Бегущего по льду\""),
      createPlacemark(new YMaps.GeoPoint(-161.343, 84.723), "Место крушения \"Гордости Тель Воса\""),
      createPlacemark(new YMaps.GeoPoint(-159.512, 84.505), "Место крушения \"Зимней Войны\""),
      createPlacemark(new YMaps.GeoPoint(-169.269, 84.790), "Место крушения \"Соленого молота\""),
      createPlacemark(new YMaps.GeoPoint(-164.494, 84.768), "Плащ Пилигрима"),
      createPlacemark(new YMaps.GeoPoint(-175.823, 84.848), "Слеза Сироты")
    ], "my#style23"),

    createGroup("Даэдрическое святилище", 24, [
      createPlacemark(new YMaps.GeoPoint(-162.856, 84.570), "Святилище Азуры"),
      createPlacemark(new YMaps.GeoPoint(-169.167, 84.431), "Святилище Мерунеса Дагона"),
      createPlacemark(new YMaps.GeoPoint(-177.295, 84.367), "Святилище Периайта"),
      createPlacemark(new YMaps.GeoPoint(-174.407, 84.685), "Статуя Меридии"),
      createPlacemark(new YMaps.GeoPoint(-160.006, 84.292), "Часовня Боэтии")
    ], "my#style24"),

    createGroup("Конюшня", 25, [
      createPlacemark(new YMaps.GeoPoint(-168.098, 84.080), "Вайтран - Конюшни"),
      createPlacemark(new YMaps.GeoPoint(-161.503, 84.291), "Виндхельм - Конюшни"),
      createPlacemark(new YMaps.GeoPoint(-178.735, 84.182), "Маркарт - Конюшни"),
      createPlacemark(new YMaps.GeoPoint(-159.456, 83.591), "Рифтен - Конюшни"),
      createPlacemark(new YMaps.GeoPoint(-173.334, 84.672), "Ферма Катлы")
    ], "my#style25"),

    createGroup("Лагерь Братьев Бури", 26, [
      createPlacemark(new YMaps.GeoPoint(-174.309, 84.633), "Хаафингар - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-169.770, 84.608), "Хьялмарк - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-164.215, 84.343), "Белый Берег - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-175.822, 84.425), "Предел - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-166.193, 84.049), "Вайтран - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-166.923, 83.696), "Фолкрит - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-162.654, 83.755), "Рифт - Лагерь Братьев Бури"),
      createPlacemark(new YMaps.GeoPoint(-160.996, 84.444), "Винтерхолд - Лагерь Братьев Бури")
    ], "my#style26"),

    createGroup("Город", 27, [
      createPlacemark(new YMaps.GeoPoint(-164.858, 83.763), "Айварстед"),
      createPlacemark(new YMaps.GeoPoint(-174.857, 84.602), "Драконий Мост"),
      createPlacemark(new YMaps.GeoPoint(-159.951, 83.782), "Камень Шора"),
      createPlacemark(new YMaps.GeoPoint(-176.597, 84.364), "Картвастен"),
      createPlacemark(new YMaps.GeoPoint(-167.890, 83.873), "Ривервуд"),
      createPlacemark(new YMaps.GeoPoint(-173.859, 84.186), "Рорикстед"),
      createPlacemark(new YMaps.GeoPoint(-168.194, 83.667), "Хелген")
    ], "my#style27"),

    createGroup("Сторожевая башня", 28, [
      createPlacemark(new YMaps.GeoPoint(-177.108, 84.689), "Башня Белая Сосна"),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.216), "Белая сторожевая башня"),
      createPlacemark(new YMaps.GeoPoint(-163.760, 84.053), "Заброшенная тюрьма"),
      createPlacemark(new YMaps.GeoPoint(-159.564, 84.355), "Привал Беженцев"),
      createPlacemark(new YMaps.GeoPoint(-175.020, 84.807), "Руины Вдовьей заставы"),
      createPlacemark(new YMaps.GeoPoint(-166.104, 84.534), "Сигнальная башня Снежная"),
      createPlacemark(new YMaps.GeoPoint(-158.044, 83.433), "Сигнальная башня Стендарра"),
      createPlacemark(new YMaps.GeoPoint(-162.276, 83.755), "Сторожевая башня Рифта"),
      createPlacemark(new YMaps.GeoPoint(-159.681, 83.841), "Сторожевая башня Шора"),
      createPlacemark(new YMaps.GeoPoint(-171.108, 83.709), "Фолкрит - Сторожевая башня")
    ], "my#style28"),

    createGroup("Мельница", 29, [
      createPlacemark(new YMaps.GeoPoint(-167.370, 84.087), "Ферма \"Холодная борозда\""),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.289), "Ферма Лорея"),
      createPlacemark(new YMaps.GeoPoint(-168.089, 84.041), "Ферма Пелагио"),
      createPlacemark(new YMaps.GeoPoint(-178.367, 84.180), "Ферма Салвиев"),
      createPlacemark(new YMaps.GeoPoint(-162.841, 83.718), "Ферма Сарети"),
      createPlacemark(new YMaps.GeoPoint(-159.829, 83.487), "Ферма Снегоходов"),
      createPlacemark(new YMaps.GeoPoint(-167.229, 84.113), "Ферма Сынов Битвы")
    ], "my#style29"),

    createGroup("Лесопилка", "30", [
      createPlacemark(new YMaps.GeoPoint(-162.928, 84.323), "Деревня Анга"),
      createPlacemark(new YMaps.GeoPoint(-161.701, 83.563), "Деревня Лесная"),
      createPlacemark(new YMaps.GeoPoint(-163.017, 84.103), "Лесопилка \"Пирожок\""),
      createPlacemark(new YMaps.GeoPoint(-171.614, 83.802), "Полулунная лесопилка"),
      createPlacemark(new YMaps.GeoPoint(-173.503, 84.641), "Солитьюд - Лесопилка")
    ], "my#style30"),
  ];
  //Группы - конец

  for (var i = 0; i < groups.length; i++) {
    addMenuItem(groups[i], map, YMaps.jQuery("#menu"));
  }
})

function addMenuItem(group, map, menuContainer) {
  YMaps.jQuery("<img src=\"icons/" + group.num + ".png\" title=\"" + group.title + "\">").bind("click", function () {
    var link = YMaps.jQuery(this);
    if (link.hasClass("active")) {
      map.removeOverlay(group);
    } else {
      map.addOverlay(group);
    }
    link.toggleClass("active");
    return false;
  }).appendTo(
  YMaps.jQuery("<v class=\"title\" href=\"#\"> </v>").appendTo(menuContainer))
};

function createGroup(title, num, objects, style) {
  var group = new YMaps.GeoObjectCollection(style);
  group.title = title;
  group.num = num
  group.add(objects);
  return group;
};

function createPlacemark(point, name, description) {
  var placemark = new YMaps.Placemark(point, {
    hasHint: 1
  });
  placemark.name = name;
  placemark.description = description;
  return placemark
}