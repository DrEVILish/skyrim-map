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

  //Ńňčëč čęîíîę
  for (var i = 1; i <= 30; i++) {
    YMaps.Styles.add('my#style' + i, {
      iconStyle: {
        href: './icons/' + i + '.png',
        size: new YMaps.Point(32, 32),
        offset: new YMaps.Point(-15, -20)
      }
    })
  };
  
  //Ăđóďďű
  groups = [
    createGroup("Ëŕăĺđü", 1, [
      createPlacemark(new YMaps.GeoPoint(-174.982, 84.522), "Âűńîňŕ Äđŕęîíčé Ěîńň"),
      createPlacemark(new YMaps.GeoPoint(-176.571, 84.176), "Ęŕđňńďŕéđ"),
      createPlacemark(new YMaps.GeoPoint(-176.387, 84.195), "Ëŕăĺđü Ęŕđňńďŕéđ"),
      createPlacemark(new YMaps.GeoPoint(-168.219, 84.248), "Ëŕăĺđü ×čńňűő đîäíčęîâ"),
      createPlacemark(new YMaps.GeoPoint(-177.786, 84.470), "Îďëîň Äđóŕäŕő"),
      createPlacemark(new YMaps.GeoPoint(-174.596, 84.108), "Îďëîň Çěĺčíűé Óňĺń"),
      createPlacemark(new YMaps.GeoPoint(-173.671, 84.406), "Ňĺńíčíŕ ăđŕáčňĺë˙"),
      createPlacemark(new YMaps.GeoPoint(-173.158, 83.743), "Őđĺáĺň Îńňđčĺ Íîćŕ")
    ], "my#style1"),

    createGroup("Ďĺůĺđŕ", 2, [
      createPlacemark(new YMaps.GeoPoint(-174.288, 84.825), "Âîđîíü˙ íîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-173.572, 83.811), "Ăëĺíěîđčëüńęčé ęîâĺí"),
      createPlacemark(new YMaps.GeoPoint(-164.559, 84.133), "Ăëóáîęŕ˙ Ňĺíü"),
      createPlacemark(new YMaps.GeoPoint(-168.241, 83.589), "Ăđîň Ńĺđŕ˙ Âîäŕ"),
      createPlacemark(new YMaps.GeoPoint(-172.908, 84.892), "Ăđîň Ńëîěŕííîĺ Âĺńëî"),
      createPlacemark(new YMaps.GeoPoint(-172.238, 84.857), "Ăđîň Ńîëĺíŕ˙ Âîäŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.214, 83.919), "Ăđîň Óňîďëĺííčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-164.167, 84.432), "Çŕáűňŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.473, 84.478), "Çŕęŕňíŕ˙ đŕńůĺëčíŕ"),
      createPlacemark(new YMaps.GeoPoint(-165.882, 84.771), "Číăâčëüä"),
      createPlacemark(new YMaps.GeoPoint(-175.289, 84.277), "Ęŕčđí Ě˙ňĺćíčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.565, 83.566), "Ęŕčđí Őîëäčđŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.989, 83.733), "Ęŕěíĺďŕäíŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.083, 83.411), "Ęđčńňŕëëč÷ĺńęŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.882, 84.567), "Ëîăîâî Ěîâŕđňŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.645, 84.151), "Ëîăîâî Ďëóňŕ"),
      createPlacemark(new YMaps.GeoPoint(-175.755, 84.173), "Ëîăîâî Ńîëüţíäŕ"),
      createPlacemark(new YMaps.GeoPoint(-158.423, 83.479), "Ëîůčíŕ Ńëîěŕííűé Řëĺě"),
      createPlacemark(new YMaps.GeoPoint(-164.650, 83.683), "Ěĺäîâŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-177.315, 84.734), "Ěîđîçíŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.798, 83.992), "Ěđŕ÷íűé Ďđĺäĺë"),
      createPlacemark(new YMaps.GeoPoint(-172.290, 83.853), "Ěřčńňŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-163.508, 84.573), "Íĺďđčěĺňíîĺ óáĺćčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-176.428, 84.792), "Íčćí˙˙ Îňâĺńíŕ˙ íîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-177.094, 84.122), "Îçĺđíűé óňĺń"),
      createPlacemark(new YMaps.GeoPoint(-176.171, 84.231), "Îďëîň Ęđŕńíűé Îđĺë"),
      createPlacemark(new YMaps.GeoPoint(-176.079, 84.490), "Îďëîň Ďđűćîę Áđţńű"),
      createPlacemark(new YMaps.GeoPoint(-172.943, 84.349), "Îđîňőĺéě"),
      createPlacemark(new YMaps.GeoPoint(-176.322, 84.765), "Îňâĺńíŕ˙ íîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.356, 84.127), "Îňęîń Ęđĺăâĺëëîó"),
      createPlacemark(new YMaps.GeoPoint(-164.432, 84.387), "Ďĺůĺđŕ Áđîíçîâŕ˙ Âîäŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.549, 84.752), "Ďĺůĺđŕ Âîë÷čé ×ĺđĺď"),
      createPlacemark(new YMaps.GeoPoint(-163.354, 84.257), "Ďĺůĺđŕ Ăîâîđ˙ůčĺ Őîëěű"),
      createPlacemark(new YMaps.GeoPoint(-158.284, 83.637), "Ďĺůĺđŕ Ćĺëňűé Ęŕěĺíü"),
      createPlacemark(new YMaps.GeoPoint(-176.311, 84.696), "Ďĺůĺđŕ Çŕáëóäřĺĺ Ýőî"),
      createPlacemark(new YMaps.GeoPoint(-173.396, 84.814), "Ďĺůĺđŕ Çĺëĺíŕ˙ Ňĺíü"),
      createPlacemark(new YMaps.GeoPoint(-159.298, 83.997), "Ďĺůĺđŕ Ęŕěĺííűé Đó÷ĺé"),
      createPlacemark(new YMaps.GeoPoint(-159.807, 83.940), "Ďĺůĺđŕ Ęđĺăńëĺéí"),
      createPlacemark(new YMaps.GeoPoint(-162.346, 84.107), "Ďĺůĺđŕ Ęđîíâŕíăđ"),
      createPlacemark(new YMaps.GeoPoint(-175.642, 84.654), "Ďĺůĺđŕ Ëóííűé Áîđ"),
      createPlacemark(new YMaps.GeoPoint(-161.907, 84.494), "Ďĺůĺđŕ Ěĺđňâîđîćäĺííîăî"),
      createPlacemark(new YMaps.GeoPoint(-166.409, 84.206), "Ďĺůĺđŕ Ěĺđöŕţůčé Ňóěŕí"),
      createPlacemark(new YMaps.GeoPoint(-177.112, 84.279), "Ďĺůĺđŕ Îňâĺńíűé Óňĺń"),
      createPlacemark(new YMaps.GeoPoint(-172.025, 84.055), "Ďĺůĺđŕ Ńëîěŕííűé Ęëűę"),
      createPlacemark(new YMaps.GeoPoint(-164.940, 83.821), "Ďĺůĺđŕ Ńîńíîâűé Ďčę"),
      createPlacemark(new YMaps.GeoPoint(-159.075, 83.870), "Ďĺůĺđŕ Ňîëâŕëüäŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.029, 83.651), "Ďĺůĺđŕ Őĺéěŕđŕ"),
      createPlacemark(new YMaps.GeoPoint(-165.282, 84.666), "Ďĺůĺđŕ Őîáŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.976, 84.639), "Ďĺůĺđŕ Őîëîäíűé Áĺđĺă"),
      createPlacemark(new YMaps.GeoPoint(-162.631, 84.897), "Ďîńň Ńĺďňčěč˙ Ńĺăîíč˙"),
      createPlacemark(new YMaps.GeoPoint(-166.723, 84.056), "Ďđčđĺ÷íŕ˙ çŕńňŕâŕ"),
      createPlacemark(new YMaps.GeoPoint(-175.513, 84.428), "Ďđčńňŕíčůĺ Ëćĺöŕ"),
      createPlacemark(new YMaps.GeoPoint(-169.924, 84.186), "Ďđčţň Đĺäîđŕíŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.865, 84.473), "Ďđîâŕë Ńęâîçí˙ęîâ"),
      createPlacemark(new YMaps.GeoPoint(-172.216, 84.382), "Đŕçâîäíŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-172.507, 83.917), "Đŕçäĺëĺííîĺ óůĺëüĺ"),
      createPlacemark(new YMaps.GeoPoint(-162.371, 84.009), "Ńâ˙ňčëčůĺ Âĺëčęîăî Äđĺâŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.404, 83.930), "Ńĺâĺđíűé Íîăîëîěíűé ďđîőîä"),
      createPlacemark(new YMaps.GeoPoint(-166.317, 84.124), "Ńĺđîçčěí˙˙ çŕńňŕâŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.993, 83.593), "Ńęâîçí˙ęîâűé ďđîőîä"),
      createPlacemark(new YMaps.GeoPoint(-159.409, 83.490), "Ńîëîâüčíűé çŕë"),
      createPlacemark(new YMaps.GeoPoint(-163.775, 83.966), "Óáĺćčůĺ Ďîňĺđ˙ííűé Íîć"),
      createPlacemark(new YMaps.GeoPoint(-176.717, 84.073), "Óňĺńíŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.872), "×ĺđíűé ďđîőîä"),
      createPlacemark(new YMaps.GeoPoint(-178.041, 84.020), "×čńňűé đó÷ĺé"),
      createPlacemark(new YMaps.GeoPoint(-162.605, 83.810), "Ůĺëęŕţůŕ˙ ďĺůĺđŕ"),
      createPlacemark(new YMaps.GeoPoint(-167.345, 83.496), "Ţćíîĺ ńâ˙ňčëčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-170.221, 83.848), "Ţćíűé Íîăîëîěíűé ďđîőîä")
    ], "my#style2"),

    createGroup("Ďîë˙íŕ", 3, [
      createPlacemark(new YMaps.GeoPoint(-160.498, 83.669), "Îńĺíí˙˙ ďîë˙íŕ"),
      createPlacemark(new YMaps.GeoPoint(-163.027, 84.195), "Ďđóä Ăëŕç Ěŕđű"),
      createPlacemark(new YMaps.GeoPoint(-175.195, 84.669), "Ďđóä ×čńňűő ńîńĺí"),
      createPlacemark(new YMaps.GeoPoint(-161.673, 83.820), "×čńňîĺ îçĺđî")
    ], "my#style3"),

    createGroup("Ďđčńňŕíü", 4, [
      createPlacemark(new YMaps.GeoPoint(-172.903, 84.683), "Ńęëŕä Âîńňî÷íîé Čěďĺđńęîé ęîěďŕíčč")
    ], "my#style4"),

    createGroup("Ęŕěíü-őđŕíčňĺëü", 5, [
      createPlacemark(new YMaps.GeoPoint(-161.778, 83.974), "Ęŕěĺíü Ŕňđîíŕőŕ"),
      createPlacemark(new YMaps.GeoPoint(-165.005, 84.719), "Ęŕěĺíü Áŕříč"),
      createPlacemark(new YMaps.GeoPoint(-160.610, 84.777), "Ęŕěĺíü Çěĺ˙"),
      createPlacemark(new YMaps.GeoPoint(-174.542, 84.770), "Ęŕěĺíü Ęîí˙"),
      createPlacemark(new YMaps.GeoPoint(-170.943, 83.815), "Ęŕěĺíü Ëĺäč"),
      createPlacemark(new YMaps.GeoPoint(-168.794, 84.456), "Ęŕěĺíü Ëîđäŕ"),
      createPlacemark(new YMaps.GeoPoint(-177.593, 84.257), "Ęŕěĺíü Ëţáîâíčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.275, 84.110), "Ęŕěĺíü Đčňóŕëŕ"),
      createPlacemark(new YMaps.GeoPoint(-159.535, 83.474), "Ęŕěĺíü Ňĺíč"),
      createPlacemark(new YMaps.GeoPoint(-172.273, 84.583), "Ęŕěĺíü Ó÷ĺíčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.981, 83.790), "Ęŕěíč-őđŕíčňĺëč")
    ], "my#style5"),

    createGroup("Ëîăîâî äđŕęîíŕ", 6, [
      createPlacemark(new YMaps.GeoPoint(-169.439, 84.412), "Ŕëňŕđü Đîćäĺííîăî Íĺáîě"),
      createPlacemark(new YMaps.GeoPoint(-160.518, 83.840), "Âĺđřčíŕ Ńĺâĺđíűé Âĺňĺđ"),
      createPlacemark(new YMaps.GeoPoint(-159.372, 83.387), "Âűńîňŕ Îňęóřĺííűé ßçűę"),
      createPlacemark(new YMaps.GeoPoint(-163.785, 84.512), "Ăîđŕ Ŕíňîđ"),
      createPlacemark(new YMaps.GeoPoint(-165.284, 84.254), "Äâóăëŕâűé ďčę"),
      createPlacemark(new YMaps.GeoPoint(-177.109, 84.425), "Ęđŕňĺđ Äđŕęîíčé Çóá"),
      createPlacemark(new YMaps.GeoPoint(-164.381, 83.555), "Îńĺíí˙˙ ńňîđîćĺâŕ˙ áŕří˙"),
      createPlacemark(new YMaps.GeoPoint(-171.470, 84.347), "Ďčę Äđĺâíčő"),
      createPlacemark(new YMaps.GeoPoint(-161.683, 84.071), "Ńęĺëĺňíűé ăđĺáĺíü"),
      createPlacemark(new YMaps.GeoPoint(-169.215, 83.549), "Őîä Äđĺâíčő")
    ], "my#style6"),

    createGroup("Äâĺěĺđńęčĺ đóčíű", 7, [
      createPlacemark(new YMaps.GeoPoint(-162.348, 83.491), "Ŕâŕí÷íçĺë"),
      createPlacemark(new YMaps.GeoPoint(-164.743, 84.568), "Ŕëüôňŕíä"),
      createPlacemark(new YMaps.GeoPoint(-167.656, 84.402), "Áŕří˙ Ěçŕđę"),
      createPlacemark(new YMaps.GeoPoint(-178.651, 84.391), "Áňŕđäŕěç"),
      createPlacemark(new YMaps.GeoPoint(-164.802, 84.282), "Čđęíňŕíä"),
      createPlacemark(new YMaps.GeoPoint(-158.408, 83.971), "Ęŕăđĺíçĺë"),
      createPlacemark(new YMaps.GeoPoint(-168.860, 84.616), "Ěçčí÷ŕëĺôň"),
      createPlacemark(new YMaps.GeoPoint(-159.642, 84.061), "Ěçóëôň"),
      createPlacemark(new YMaps.GeoPoint(-164.180, 84.250), "Đŕëüäáňőŕđ")
    ], "my#style7"),

    createGroup("Ôĺđěŕ", 8, [
      createPlacemark(new YMaps.GeoPoint(-159.789, 83.617), "Âĺńĺëŕ˙ ôĺđěŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.720, 84.341), "Ôĺđěŕ \"Îńňđîëčńň\""),
      createPlacemark(new YMaps.GeoPoint(-160.894, 84.330), "Ôĺđěŕ Őëŕŕëó")
    ], "my#style8"),

    createGroup("Ôîđň", 9, [
      createPlacemark(new YMaps.GeoPoint(-160.991, 83.423), "Áŕří˙ Ńâĺňîňüěű"),
      createPlacemark(new YMaps.GeoPoint(-163.513, 84.175), "Âčńĺëüíŕ˙ ńęŕëŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.153, 83.930), "Âűńîęčé Őđîňăŕđ"),
      createPlacemark(new YMaps.GeoPoint(-170.875, 83.851), "Ăëóáčíű Čëčíŕëňű"),
      createPlacemark(new YMaps.GeoPoint(-165.940, 84.581), "Äđčôňřĺéä - Ďđčţň"),
      createPlacemark(new YMaps.GeoPoint(-169.006, 84.056), "Çŕďŕäíŕ˙ ńňîđîćĺâŕ˙ áŕří˙"),
      createPlacemark(new YMaps.GeoPoint(-160.957, 83.586), "Çóá Ôŕëäŕđŕ"),
      createPlacemark(new YMaps.GeoPoint(-172.209, 83.615), "Ęđĺďîńňü Ňđĺńíóâřčé Áčâĺíü"),
      createPlacemark(new YMaps.GeoPoint(-165.550, 84.192), "Ęđĺďîńňü Ôĺëëăëîó"),
      createPlacemark(new YMaps.GeoPoint(-169.102, 83.471), "Ęđîâŕâűé Ňđîí"),
      createPlacemark(new YMaps.GeoPoint(-162.465, 84.254), "Ěîđâóíńęŕđ"),
      createPlacemark(new YMaps.GeoPoint(-177.199, 84.778), "Ńĺâĺđíŕ˙ ńňîđîćĺâŕ˙ ęđĺďîńňü"),
      createPlacemark(new YMaps.GeoPoint(-175.224, 84.362), "Ńëîěŕííŕ˙ áŕří˙"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.654), "Ňđĺâńęŕ˙ çŕńňŕâŕ"),
      createPlacemark(new YMaps.GeoPoint(-161.463, 83.939), "Ňóěŕííŕ˙ çŕńňŕâŕ"),
      createPlacemark(new YMaps.GeoPoint(-163.478, 84.008), "Ôîđň Ŕěîë"),
      createPlacemark(new YMaps.GeoPoint(-169.906, 84.097), "Ôîđň Ăđĺéěóđ"),
      createPlacemark(new YMaps.GeoPoint(-159.729, 83.711), "Ôîđň Ăđčíâîë"),
      createPlacemark(new YMaps.GeoPoint(-167.572, 84.485), "Ôîđň Äóíńňŕä"),
      createPlacemark(new YMaps.GeoPoint(-162.883, 84.431), "Ôîđň Ęŕńňŕâ"),
      createPlacemark(new YMaps.GeoPoint(-167.261, 83.590), "Ôîđň Íîéăđŕä"),
      createPlacemark(new YMaps.GeoPoint(-173.125, 83.993), "Ôîđň Ńŕíăŕđä"),
      createPlacemark(new YMaps.GeoPoint(-172.406, 84.521), "Ôîđň Ńíîóőîę"),
      createPlacemark(new YMaps.GeoPoint(-166.688, 84.536), "Ôîđň Ôĺëëőŕěěĺđ"),
      createPlacemark(new YMaps.GeoPoint(-175.435, 84.765), "Ôîđň Őđŕăńňŕä"),
      createPlacemark(new YMaps.GeoPoint(-176.845, 84.452), "Őŕđěóăńňŕë"),
      createPlacemark(new YMaps.GeoPoint(-166.844, 84.693), "Őđŕě Ďđčçűâŕňĺëĺé Íî÷č")                	
    ], "my#style9"),

    createGroup("Ëŕăĺđü âĺëčęŕíîâ", 10, [
      createPlacemark(new YMaps.GeoPoint(-165.317, 84.315), "Ŕđî÷íűé ďĺđĺâŕë"),
      createPlacemark(new YMaps.GeoPoint(-169.053, 84.145), "Âîäîĺě Őîëîäíűé Âĺňĺđ"),
      createPlacemark(new YMaps.GeoPoint(-166.939, 84.363), "Äîě Áóđŕíîâ"),
      createPlacemark(new YMaps.GeoPoint(-167.915, 84.582), "Ęđŕńíűé ďĺđĺâŕë"),
      createPlacemark(new YMaps.GeoPoint(-173.153, 84.266), "Ëŕăĺđü Ăîâîđ˙ůčé Ęŕěĺíü"),
      createPlacemark(new YMaps.GeoPoint(-162.868, 84.058), "Ëŕăĺđü Ńëîěŕííŕ˙ Íîăŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.336, 84.037), "Ëŕăĺđü Ńîííîĺ Äĺđĺâî"),
      createPlacemark(new YMaps.GeoPoint(-161.097, 84.083), "Ďŕđîâîé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-169.207, 83.987), "Ďîöĺëóé Ńĺęóíäű"),
      createPlacemark(new YMaps.GeoPoint(-163.953, 84.110), "Ńĺäëîâŕ˙ ńęŕëŕ"),
      createPlacemark(new YMaps.GeoPoint(-165.042, 84.082), "Ńęŕëŕ Ăóëäóí"),
      createPlacemark(new YMaps.GeoPoint(-168.173, 84.389), "Óňĺń Ęŕěĺííűé Őîëě")
    ], "my#style10"),

    createGroup("Đîůŕ", 11, [
      createPlacemark(new YMaps.GeoPoint(-171.981, 83.739), "Âĺ÷íîçĺëĺíŕ˙ đîůŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.656, 84.229), "Íîđŕ Çĺëĺíűé Đó÷ĺé"),
      createPlacemark(new YMaps.GeoPoint(-161.549, 84.119), "Đîůŕ Âĺäüěčí Ňóěŕí"),
      createPlacemark(new YMaps.GeoPoint(-158.282, 83.638), "Đîůŕ Ăčăŕíňîâ"),
      createPlacemark(new YMaps.GeoPoint(-165.826, 84.382), "Ńęđűňŕ˙ đîůŕ")
    ], "my#style11"),

    createGroup("Čěďĺđńęčé ëŕăĺđü", 12, [
      createPlacemark(new YMaps.GeoPoint(-170.252, 84.581), "Őü˙ëěŕđę - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-169.259, 84.697), "Áĺëűé Áĺđĺă - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-166.182, 84.667), "Âčíňĺđőîëä - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-178.037, 84.336), "Ďđĺäĺë - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-172.561, 84.179), "Âŕéňđŕí - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-159.344, 84.026), "Čńňěŕđę - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-172.962, 83.838), "Ôîëęđčň - Čěďĺđńęčé ëŕăĺđü"),
      createPlacemark(new YMaps.GeoPoint(-164.618, 83.615), "Đčôň - Čěďĺđńęčé ëŕăĺđü")
    ], "my#style12"),

    createGroup("Äîńňîďđčěĺ÷ŕňĺëüíîńňü", 13, [
      createPlacemark(new YMaps.GeoPoint(-166.006, 83.857), "Ăëîňęŕ Ěčđŕ"),
      createPlacemark(new YMaps.GeoPoint(-176.963, 84.070), "Ăíĺçäî Âĺňđîâ Ďđĺäĺëŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.617, 84.405), "Ęŕěíč Âĺéíîí"),
      createPlacemark(new YMaps.GeoPoint(-172.612, 84.088), "Ěîíóěĺíň Ăüţęŕđŕ"),
      createPlacemark(new YMaps.GeoPoint(-167.103, 83.730), "Îäčíîęŕ˙ ńęŕëŕ"),
      createPlacemark(new YMaps.GeoPoint(-178.627, 84.474), "Ďĺđĺďđŕâŕ Ăëóáčííîăî Íŕđîäŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.292, 83.931), "Ďčę Ďđűćîę Áŕđäŕ"),
      createPlacemark(new YMaps.GeoPoint(-164.236, 83.620), "Đóčíű Áňŕëôňŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.436, 83.387), "Đóčíű Đęóíäŕ"),
      createPlacemark(new YMaps.GeoPoint(-176.998, 84.184), "Őđŕě Íĺáĺńíîé ăŕâŕíč")
    ], "my#style13"),

    createGroup("Ěŕ˙ę", 14, [
      createPlacemark(new YMaps.GeoPoint(-165.490, 84.634), "Číĺĺâűé ěŕ˙ę"),
      createPlacemark(new YMaps.GeoPoint(-171.825, 84.837), "Ńîëčňüţä - Ěŕ˙ę")
    ], "my#style14"),

    createGroup("Řŕőňŕ", 15, [
      createPlacemark(new YMaps.GeoPoint(-173.587, 83.915), "Ćĺë÷íŕ˙ řŕőňŕ"),
      createPlacemark(new YMaps.GeoPoint(-169.338, 84.502), "Ęŕěĺííűĺ őîëěű"),
      createPlacemark(new YMaps.GeoPoint(-162.076, 84.567), "Ńâčńň˙ůŕ˙ řŕőňŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.144, 84.164), "Ńóěđŕ÷íŕ˙ řŕőňŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.617, 83.795), "Ôŕęĺëüíŕ˙ řŕőňŕ"),
      createPlacemark(new YMaps.GeoPoint(-162.254, 83.938), "×ĺđíűé Áđîä"),
      createPlacemark(new YMaps.GeoPoint(-177.484, 84.231), "Řŕőňŕ Ęîëńęĺăăđ"),
      createPlacemark(new YMaps.GeoPoint(-178.487, 84.131), "Řŕőňŕ Ëĺâŕ˙ Đóęŕ"),
      createPlacemark(new YMaps.GeoPoint(-158.048, 83.604), "Řŕőňŕ Ďîňĺđ˙ííűé Řŕíń"),
      createPlacemark(new YMaps.GeoPoint(-160.654, 83.873), "Řŕőňŕ Ńĺâĺđíűé Âĺňĺđ")
    ], "my#style15"),

    createGroup("Đóčíű", 16, [
      createPlacemark(new YMaps.GeoPoint(-163.823, 84.439), "Âűńîňŕ Éîđăđčě"),
      createPlacemark(new YMaps.GeoPoint(-176.645, 84.274), "Íŕáëţäŕňĺëüíűé ďîńň \"×ĺňűđĺ ×ĺđĺďŕ\""),
      createPlacemark(new YMaps.GeoPoint(-169.834, 84.406), "Ďîňĺđ˙ííűé Âŕëęčăă"),
      createPlacemark(new YMaps.GeoPoint(-170.188, 84.263), "Ďđčâŕë Őŕěâčđŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.576, 83.673), "Ďđčäîđîćíűĺ đóčíű"),
      createPlacemark(new YMaps.GeoPoint(-161.943, 84.595), "Ďđčţň Ďîäěŕńňĺđü˙"),
      createPlacemark(new YMaps.GeoPoint(-170.156, 84.541), "Đóčíű Ęüĺíńňŕă"),
      createPlacemark(new YMaps.GeoPoint(-162.318, 84.795), "Đóčíű Íĺáĺńíîăî Őđŕěŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.033, 84.653), "Đóčíű Îáĺđĺă Âĺňđîâ"),
      createPlacemark(new YMaps.GeoPoint(-167.296, 83.781), "Ńĺâĺđíŕ˙ ăîđíŕ˙ çŕńňŕâŕ")
    ], "my#style16"),

    createGroup("Íîđäńęčĺ đóčíű", 17, [
      createPlacemark(new YMaps.GeoPoint(-162.822, 83.554), "Ŕíăŕđâóíä"),
      createPlacemark(new YMaps.GeoPoint(-159.342, 83.936), "Ŕíńčëâóíä"),
      createPlacemark(new YMaps.GeoPoint(-175.601, 83.953), "Âŕëňóě"),
      createPlacemark(new YMaps.GeoPoint(-178.805, 84.057), "Âĺäüěčí îďëîň"),
      createPlacemark(new YMaps.GeoPoint(-176.182, 84.585), "Âĺäüěčíî ăíĺçäî"),
      createPlacemark(new YMaps.GeoPoint(-169.230, 83.886), "Âĺňđĺíűé ďčę"),
      createPlacemark(new YMaps.GeoPoint(-165.440, 83.544), "Âĺňđîâŕ˙ Äóăŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.563, 84.321), "Âîëóíäđóä"),
      createPlacemark(new YMaps.GeoPoint(-176.382, 84.650), "Âîëüńęčăăĺ"),
      createPlacemark(new YMaps.GeoPoint(-163.814, 84.793), "Ăđîáíčöŕ Čńăđŕěîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-164.615, 84.038), "Ăđîáíčöŕ Őčëăđóíäŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.113, 84.244), "Äđĺâíčé ęŕčđí"),
      createPlacemark(new YMaps.GeoPoint(-164.082, 83.760), "Çŕë Ăĺéđěóíäŕ"),
      createPlacemark(new YMaps.GeoPoint(-166.004, 84.323), "Ęîđâŕíüţíä"),
      createPlacemark(new YMaps.GeoPoint(-165.099, 84.464), "Ęóđăŕí Ćĺëĺçíűé"),
      createPlacemark(new YMaps.GeoPoint(-160.249, 84.405), "Ęóđăŕí Číăîëŕ"),
      createPlacemark(new YMaps.GeoPoint(-164.669, 83.773), "Ęóđăŕí Ďîăđĺáŕëüíűé Îăîíü"),
      createPlacemark(new YMaps.GeoPoint(-170.441, 84.376), "Ëŕáčđčíňčŕí"),
      createPlacemark(new YMaps.GeoPoint(-168.900, 84.241), "Ëŕăĺđü Ňčőčő Ëóí"),
      createPlacemark(new YMaps.GeoPoint(-176.523, 84.581), "Ëĺńíîé îďëîň"),
      createPlacemark(new YMaps.GeoPoint(-171.672, 84.292), "Îáčňĺëü Đŕííâĺéă"),
      createPlacemark(new YMaps.GeoPoint(-174.197, 83.926), "Îďëîň Ďîňĺđ˙ííŕ˙ Äîëčíŕ"),
      createPlacemark(new YMaps.GeoPoint(-179.016, 84.299), "Đŕăíâŕëüä"),
      createPlacemark(new YMaps.GeoPoint(-170.191, 84.720), "Đóčíű Âűńîęčő Âđŕň"),
      createPlacemark(new YMaps.GeoPoint(-163.959, 84.646), "Ńŕŕđňŕë"),
      createPlacemark(new YMaps.GeoPoint(-170.677, 83.715), "Ńĺâĺđíűé áŕńňčîí Ęđč÷ŕůčé Âĺňĺđ"),
      createPlacemark(new YMaps.GeoPoint(-170.570, 83.684), "Ţćíűé áŕńňčîí Ęđč÷ŕůčé Âĺňĺđ"),
      createPlacemark(new YMaps.GeoPoint(-165.794, 84.449), "Ńĺđĺáđ˙íîĺ ëîăîâî"),
      createPlacemark(new YMaps.GeoPoint(-160.964, 84.537), "Ńíĺćíŕ˙ Çŕâĺńŕ - Ńâ˙ňčëčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-173.144, 83.656), "Ńóěĺđĺ÷íŕ˙ ăđîáíčöŕ"),
      createPlacemark(new YMaps.GeoPoint(-172.906, 84.448), "Óďîęîčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-170.413, 84.626), "Óńňĺíăđĺâ"),
      createPlacemark(new YMaps.GeoPoint(-171.813, 84.645), "Ôîëăóíňóđ"),
      createPlacemark(new YMaps.GeoPoint(-158.882, 83.453), "Ôîđĺëőîńň"),
      createPlacemark(new YMaps.GeoPoint(-168.548, 84.534), "Ôđîńňěčđ")
    ], "my#style17"),

    createGroup("Íîđäńęŕ˙ áŕří˙", 18, [
      createPlacemark(new YMaps.GeoPoint(-164.975, 84.137), "Áŕříč Âŕëňĺéě"),
      createPlacemark(new YMaps.GeoPoint(-172.334, 83.773), "Áŕří˙ Áŕííĺđěčńň"),
      createPlacemark(new YMaps.GeoPoint(-174.765, 83.945), "Áŕří˙ Ęđĺäëńňîóí"),
      createPlacemark(new YMaps.GeoPoint(-163.555, 83.800), "Íčëőĺéě"),
      createPlacemark(new YMaps.GeoPoint(-175.754, 84.302), "Đŕçäĺëĺííűĺ áŕříč"),
      createPlacemark(new YMaps.GeoPoint(-179.261, 84.030), "Ńňŕđóřĺ÷ü˙ ńęŕëŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.147, 83.616), "Ňĺíĺâŕ˙ áŕří˙"),
      createPlacemark(new YMaps.GeoPoint(-175.062, 84.225), "Óňĺń Őîëîäíűé Âĺňĺđ"),
      createPlacemark(new YMaps.GeoPoint(-167.970, 83.727), "Ţćíŕ˙ ăîđíŕ˙ çŕńňŕâŕ")
    ], "my#style18"),

    createGroup("Ęđĺďîńňü îđęîâ", 19, [
      createPlacemark(new YMaps.GeoPoint(-177.332, 84.008), "Äóříčę-Éŕë"),
      createPlacemark(new YMaps.GeoPoint(-161.479, 83.468), "Ëŕđăŕřáóđ"),
      createPlacemark(new YMaps.GeoPoint(-177.683, 84.594), "Ěîđ Ęŕçăóđ"),
      createPlacemark(new YMaps.GeoPoint(-160.266, 84.199), "Íŕđçóëáóđ")
    ], "my#style19"),

    createGroup("Ďđîőîä", 20, [
      createPlacemark(new YMaps.GeoPoint(-164.845, 84.492), "Ďĺđĺâŕë Ńňđŕííčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.345), "Ńĺâĺđíűé ďđîőîä Őîëîäíűő Ńęŕë"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.326), "Ţćíűé ďđîőîä Őîëîäíűő Ńęŕë")
    ], "my#style20"),

    createGroup("Ďîńĺëĺíčĺ", 21, [
      createPlacemark(new YMaps.GeoPoint(-167.352, 84.759), "Äŕíńňŕđńęîĺ óáĺćčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-167.384, 84.035), "Ěĺäîâŕđí˙ Őîííčíăŕ"),
      createPlacemark(new YMaps.GeoPoint(-160.355, 83.573), "Ďîěĺńňüĺ \"Çëŕňîöâĺň\""),
      createPlacemark(new YMaps.GeoPoint(-158.035, 83.559), "Đĺçčäĺíöč˙ \"×ĺđíűé Âĺđĺńę\""),
      createPlacemark(new YMaps.GeoPoint(-161.423, 84.213), "Đîůŕ Ęčí"),
      createPlacemark(new YMaps.GeoPoint(-175.487, 84.095), "Ńňŕđűé Őđîëäŕí"),
      createPlacemark(new YMaps.GeoPoint(-165.041, 84.408), "Ňŕâĺđíŕ \"Íî÷íűĺ âîđîňŕ\""),
      createPlacemark(new YMaps.GeoPoint(-173.636, 84.764), "Ňŕëěîđńęîĺ ďîńîëüńňâî"),
      createPlacemark(new YMaps.GeoPoint(-161.286, 84.285), "Ôĺđěŕ \"Ęđóćęŕ Áđĺíäč\""),
      createPlacemark(new YMaps.GeoPoint(-171.477, 83.641), "Óáĺćčůĺ Ňĺěíîăî Áđŕňńňâŕ")
    ], "my#style21"),

    createGroup("Őčćčíŕ", 22, [
      createPlacemark(new YMaps.GeoPoint(-175.211, 84.458), "Ăîđíűé ďđčţň"),
      createPlacemark(new YMaps.GeoPoint(-170.835, 84.295), "Äîě Äđĺëŕńŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.303, 84.755), "Ćĺëĺçíîĺ óáĺćčůĺ"),
      createPlacemark(new YMaps.GeoPoint(-171.053, 84.660), "Çŕáđîřĺííŕ˙ őčćčíŕ"),
      createPlacemark(new YMaps.GeoPoint(-168.019, 84.515), "Çŕë Äîçîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-170.583, 83.506), "Ëŕăĺđü Ŕíăč"),
      createPlacemark(new YMaps.GeoPoint(-172.286, 83.819), "Îőîňíč÷čé ďđčâŕë"),
      createPlacemark(new YMaps.GeoPoint(-160.004, 84.354), "Ďîńň Ďđĺäŕňĺë˙"),
      createPlacemark(new YMaps.GeoPoint(-162.287, 84.180), "Đĺ÷íŕ˙ őčćčíŕ"),
      createPlacemark(new YMaps.GeoPoint(-169.651, 83.687), "Ńîńíîâŕ˙ çŕńňŕâŕ"),
      createPlacemark(new YMaps.GeoPoint(-173.145, 84.391), "Őčáŕđŕ ęđŕáîëîâŕ"),
      createPlacemark(new YMaps.GeoPoint(-165.118, 83.639), "Őčćčíŕ ŕëőčěčęŕ"),
      createPlacemark(new YMaps.GeoPoint(-169.074, 83.830), "Őčćčíŕ Ŕíčń"),
      createPlacemark(new YMaps.GeoPoint(-174.271, 84.241), "Őčćčíŕ Ëóíäŕ"),
      createPlacemark(new YMaps.GeoPoint(-173.173, 84.565), "Őčćčíŕ Ěčęî"),
      createPlacemark(new YMaps.GeoPoint(-163.726, 83.531), "Őčćčíŕ Ôđîęč")              	
    ], "my#style22"),

    createGroup("Ęîđŕáëü/Ěĺńňî ęîđŕáëĺęđóřĺíč˙", 23, [
      createPlacemark(new YMaps.GeoPoint(-172.034, 84.733), "\"Ęŕňŕđč˙\""),
      createPlacemark(new YMaps.GeoPoint(-172.071, 84.805), "\"Ďđčâĺđĺäëčâűé ńëîŕä\""),
      createPlacemark(new YMaps.GeoPoint(-166.252, 84.815), "Ęŕďđčç Őĺëű"),
      createPlacemark(new YMaps.GeoPoint(-171.011, 84.735), "Ěĺńňî ęđóřĺíč˙ \"Áĺăóůĺăî ďî ëüäó\""),
      createPlacemark(new YMaps.GeoPoint(-161.343, 84.723), "Ěĺńňî ęđóřĺíč˙ \"Ăîđäîńňč Ňĺëü Âîńŕ\""),
      createPlacemark(new YMaps.GeoPoint(-159.512, 84.505), "Ěĺńňî ęđóřĺíč˙ \"Çčěíĺé Âîéíű\""),
      createPlacemark(new YMaps.GeoPoint(-169.269, 84.790), "Ěĺńňî ęđóřĺíč˙ \"Ńîëĺíîăî ěîëîňŕ\""),
      createPlacemark(new YMaps.GeoPoint(-164.494, 84.768), "Ďëŕů Ďčëčăđčěŕ"),
      createPlacemark(new YMaps.GeoPoint(-175.823, 84.848), "Ńëĺçŕ Ńčđîňű")
    ], "my#style23"),

    createGroup("Äŕýäđč÷ĺńęîĺ ńâ˙ňčëčůĺ", 24, [
      createPlacemark(new YMaps.GeoPoint(-162.856, 84.570), "Ńâ˙ňčëčůĺ Ŕçóđű"),
      createPlacemark(new YMaps.GeoPoint(-169.167, 84.431), "Ńâ˙ňčëčůĺ Ěĺđóíĺńŕ Äŕăîíŕ"),
      createPlacemark(new YMaps.GeoPoint(-177.295, 84.367), "Ńâ˙ňčëčůĺ Ďĺđčŕéňŕ"),
      createPlacemark(new YMaps.GeoPoint(-174.407, 84.685), "Ńňŕňó˙ Ěĺđčäčč"),
      createPlacemark(new YMaps.GeoPoint(-160.006, 84.292), "×ŕńîâí˙ Áîýňčč")
    ], "my#style24"),

    createGroup("Ęîíţří˙", 25, [
      createPlacemark(new YMaps.GeoPoint(-168.098, 84.080), "Âŕéňđŕí - Ęîíţříč"),
      createPlacemark(new YMaps.GeoPoint(-161.503, 84.291), "Âčíäőĺëüě - Ęîíţříč"),
      createPlacemark(new YMaps.GeoPoint(-178.735, 84.182), "Ěŕđęŕđň - Ęîíţříč"),
      createPlacemark(new YMaps.GeoPoint(-159.456, 83.591), "Đčôňĺí - Ęîíţříč"),
      createPlacemark(new YMaps.GeoPoint(-173.334, 84.672), "Ôĺđěŕ Ęŕňëű")
    ], "my#style25"),

    createGroup("Ëŕăĺđü Áđŕňüĺâ Áóđč", 26, [
      createPlacemark(new YMaps.GeoPoint(-174.309, 84.633), "Őŕŕôčíăŕđ - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-169.770, 84.608), "Őü˙ëěŕđę - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-164.215, 84.343), "Áĺëűé Áĺđĺă - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-175.822, 84.425), "Ďđĺäĺë - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-166.193, 84.049), "Âŕéňđŕí - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-166.923, 83.696), "Ôîëęđčň - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-162.654, 83.755), "Đčôň - Ëŕăĺđü Áđŕňüĺâ Áóđč"),
      createPlacemark(new YMaps.GeoPoint(-160.996, 84.444), "Âčíňĺđőîëä - Ëŕăĺđü Áđŕňüĺâ Áóđč")
    ], "my#style26"),

    createGroup("Ăîđîä", 27, [
      createPlacemark(new YMaps.GeoPoint(-164.858, 83.763), "Ŕéâŕđńňĺä"),
      createPlacemark(new YMaps.GeoPoint(-174.857, 84.602), "Äđŕęîíčé Ěîńň"),
      createPlacemark(new YMaps.GeoPoint(-159.951, 83.782), "Ęŕěĺíü Řîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-176.597, 84.364), "Ęŕđňâŕńňĺí"),
      createPlacemark(new YMaps.GeoPoint(-167.890, 83.873), "Đčâĺđâóä"),
      createPlacemark(new YMaps.GeoPoint(-173.859, 84.186), "Đîđčęńňĺä"),
      createPlacemark(new YMaps.GeoPoint(-168.194, 83.667), "Őĺëăĺí")
    ], "my#style27"),

    createGroup("Ńňîđîćĺâŕ˙ áŕří˙", 28, [
      createPlacemark(new YMaps.GeoPoint(-177.108, 84.689), "Áŕří˙ Áĺëŕ˙ Ńîńíŕ"),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.216), "Áĺëŕ˙ ńňîđîćĺâŕ˙ áŕří˙"),
      createPlacemark(new YMaps.GeoPoint(-163.760, 84.053), "Çŕáđîřĺííŕ˙ ňţđüěŕ"),
      createPlacemark(new YMaps.GeoPoint(-159.564, 84.355), "Ďđčâŕë Áĺćĺíöĺâ"),
      createPlacemark(new YMaps.GeoPoint(-175.020, 84.807), "Đóčíű Âäîâüĺé çŕńňŕâű"),
      createPlacemark(new YMaps.GeoPoint(-166.104, 84.534), "Ńčăíŕëüíŕ˙ áŕří˙ Ńíĺćíŕ˙"),
      createPlacemark(new YMaps.GeoPoint(-158.044, 83.433), "Ńčăíŕëüíŕ˙ áŕří˙ Ńňĺíäŕđđŕ"),
      createPlacemark(new YMaps.GeoPoint(-162.276, 83.755), "Ńňîđîćĺâŕ˙ áŕří˙ Đčôňŕ"),
      createPlacemark(new YMaps.GeoPoint(-159.681, 83.841), "Ńňîđîćĺâŕ˙ áŕří˙ Řîđŕ"),
      createPlacemark(new YMaps.GeoPoint(-171.108, 83.709), "Ôîëęđčň - Ńňîđîćĺâŕ˙ áŕří˙")
    ], "my#style28"),

    createGroup("Ěĺëüíčöŕ", 29, [
      createPlacemark(new YMaps.GeoPoint(-167.370, 84.087), "Ôĺđěŕ \"Őîëîäíŕ˙ áîđîçäŕ\""),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.289), "Ôĺđěŕ Ëîđĺ˙"),
      createPlacemark(new YMaps.GeoPoint(-168.089, 84.041), "Ôĺđěŕ Ďĺëŕăčî"),
      createPlacemark(new YMaps.GeoPoint(-178.367, 84.180), "Ôĺđěŕ Ńŕëâčĺâ"),
      createPlacemark(new YMaps.GeoPoint(-162.841, 83.718), "Ôĺđěŕ Ńŕđĺňč"),
      createPlacemark(new YMaps.GeoPoint(-159.829, 83.487), "Ôĺđěŕ Ńíĺăîőîäîâ"),
      createPlacemark(new YMaps.GeoPoint(-167.229, 84.113), "Ôĺđěŕ Ńűíîâ Áčňâű")
    ], "my#style29"),

    createGroup("Ëĺńîďčëęŕ", "30", [
      createPlacemark(new YMaps.GeoPoint(-162.928, 84.323), "Äĺđĺâí˙ Ŕíăŕ"),
      createPlacemark(new YMaps.GeoPoint(-161.701, 83.563), "Äĺđĺâí˙ Ëĺńíŕ˙"),
      createPlacemark(new YMaps.GeoPoint(-163.017, 84.103), "Ëĺńîďčëęŕ \"Ďčđîćîę\""),
      createPlacemark(new YMaps.GeoPoint(-171.614, 83.802), "Ďîëóëóííŕ˙ ëĺńîďčëęŕ"),
      createPlacemark(new YMaps.GeoPoint(-173.503, 84.641), "Ńîëčňüţä - Ëĺńîďčëęŕ")
    ], "my#style30"),
  ];
  //Ăđóďďű - ęîíĺö

  for (var i = 0; i < groups.length; i++) {
    addMenuItem(groups[i], map, YMaps.jQuery("#menu"));
  }
})

function addMenuItem(group, map, menuContainer) {
  YMaps.jQuery("<img src=\"./icons/" + group.num + ".png\" title=\"" + group.title + "\">").bind("click", function () {
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
