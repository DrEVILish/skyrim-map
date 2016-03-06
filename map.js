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

  //����� ������
  for (var i = 1; i <= 30; i++) {
    YMaps.Styles.add('my#style' + i, {
      iconStyle: {
        href: './icons/' + i + '.png',
        size: new YMaps.Point(32, 32),
        offset: new YMaps.Point(-15, -20)
      }
    })
  };
  
  //������
  groups = [
    createGroup("������", 1, [
      createPlacemark(new YMaps.GeoPoint(-174.982, 84.522), "������ �������� ����"),
      createPlacemark(new YMaps.GeoPoint(-176.571, 84.176), "���������"),
      createPlacemark(new YMaps.GeoPoint(-176.387, 84.195), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-168.219, 84.248), "������ ������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-177.786, 84.470), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-174.596, 84.108), "����� ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-173.671, 84.406), "������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-173.158, 83.743), "������ ������ ����")
    ], "my#style1"),

    createGroup("������", 2, [
      createPlacemark(new YMaps.GeoPoint(-174.288, 84.825), "������� ����"),
      createPlacemark(new YMaps.GeoPoint(-173.572, 83.811), "�������������� �����"),
      createPlacemark(new YMaps.GeoPoint(-164.559, 84.133), "�������� ����"),
      createPlacemark(new YMaps.GeoPoint(-168.241, 83.589), "���� ����� ����"),
      createPlacemark(new YMaps.GeoPoint(-172.908, 84.892), "���� ��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-172.238, 84.857), "���� ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-171.214, 83.919), "���� �����������"),
      createPlacemark(new YMaps.GeoPoint(-164.167, 84.432), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-166.473, 84.478), "�������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-165.882, 84.771), "��������"),
      createPlacemark(new YMaps.GeoPoint(-175.289, 84.277), "����� ���������"),
      createPlacemark(new YMaps.GeoPoint(-171.565, 83.566), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-160.989, 83.733), "����������� ������"),
      createPlacemark(new YMaps.GeoPoint(-160.083, 83.411), "��������������� ������"),
      createPlacemark(new YMaps.GeoPoint(-170.882, 84.567), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-171.645, 84.151), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-175.755, 84.173), "������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-158.423, 83.479), "������ ��������� ����"),
      createPlacemark(new YMaps.GeoPoint(-164.650, 83.683), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-177.315, 84.734), "�������� ������"),
      createPlacemark(new YMaps.GeoPoint(-174.798, 83.992), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-172.290, 83.853), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-163.508, 84.573), "����������� �������"),
      createPlacemark(new YMaps.GeoPoint(-176.428, 84.792), "������ �������� ����"),
      createPlacemark(new YMaps.GeoPoint(-177.094, 84.122), "������� ����"),
      createPlacemark(new YMaps.GeoPoint(-176.171, 84.231), "����� ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-176.079, 84.490), "����� ������ �����"),
      createPlacemark(new YMaps.GeoPoint(-172.943, 84.349), "��������"),
      createPlacemark(new YMaps.GeoPoint(-176.322, 84.765), "�������� ����"),
      createPlacemark(new YMaps.GeoPoint(-160.356, 84.127), "����� ����������"),
      createPlacemark(new YMaps.GeoPoint(-164.432, 84.387), "������ ��������� ����"),
      createPlacemark(new YMaps.GeoPoint(-174.549, 84.752), "������ ������ �����"),
      createPlacemark(new YMaps.GeoPoint(-163.354, 84.257), "������ ��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-158.284, 83.637), "������ ������ ������"),
      createPlacemark(new YMaps.GeoPoint(-176.311, 84.696), "������ ��������� ���"),
      createPlacemark(new YMaps.GeoPoint(-173.396, 84.814), "������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-159.298, 83.997), "������ �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-159.807, 83.940), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-162.346, 84.107), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-175.642, 84.654), "������ ������ ���"),
      createPlacemark(new YMaps.GeoPoint(-161.907, 84.494), "������ ����������������"),
      createPlacemark(new YMaps.GeoPoint(-166.409, 84.206), "������ ��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-177.112, 84.279), "������ �������� ����"),
      createPlacemark(new YMaps.GeoPoint(-172.025, 84.055), "������ ��������� ����"),
      createPlacemark(new YMaps.GeoPoint(-164.940, 83.821), "������ �������� ���"),
      createPlacemark(new YMaps.GeoPoint(-159.075, 83.870), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-166.029, 83.651), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-165.282, 84.666), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-160.976, 84.639), "������ �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-162.631, 84.897), "���� �������� �������"),
      createPlacemark(new YMaps.GeoPoint(-166.723, 84.056), "��������� �������"),
      createPlacemark(new YMaps.GeoPoint(-175.513, 84.428), "���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-169.924, 84.186), "����� ��������"),
      createPlacemark(new YMaps.GeoPoint(-174.865, 84.473), "������ ����������"),
      createPlacemark(new YMaps.GeoPoint(-172.216, 84.382), "��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-172.507, 83.917), "����������� ������"),
      createPlacemark(new YMaps.GeoPoint(-162.371, 84.009), "��������� �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-170.404, 83.930), "�������� ���������� ������"),
      createPlacemark(new YMaps.GeoPoint(-166.317, 84.124), "���������� �������"),
      createPlacemark(new YMaps.GeoPoint(-168.993, 83.593), "������������ ������"),
      createPlacemark(new YMaps.GeoPoint(-159.409, 83.490), "���������� ���"),
      createPlacemark(new YMaps.GeoPoint(-163.775, 83.966), "������� ���������� ���"),
      createPlacemark(new YMaps.GeoPoint(-176.717, 84.073), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.872), "������ ������"),
      createPlacemark(new YMaps.GeoPoint(-178.041, 84.020), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-162.605, 83.810), "��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-167.345, 83.496), "����� ���������"),
      createPlacemark(new YMaps.GeoPoint(-170.221, 83.848), "����� ���������� ������")
    ], "my#style2"),

    createGroup("������", 3, [
      createPlacemark(new YMaps.GeoPoint(-160.498, 83.669), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-163.027, 84.195), "���� ���� ����"),
      createPlacemark(new YMaps.GeoPoint(-175.195, 84.669), "���� ������ �����"),
      createPlacemark(new YMaps.GeoPoint(-161.673, 83.820), "������ �����")
    ], "my#style3"),

    createGroup("��������", 4, [
      createPlacemark(new YMaps.GeoPoint(-172.903, 84.683), "����� ��������� ��������� ��������")
    ], "my#style4"),

    createGroup("�����-���������", 5, [
      createPlacemark(new YMaps.GeoPoint(-161.778, 83.974), "������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-165.005, 84.719), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-160.610, 84.777), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-174.542, 84.770), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-170.943, 83.815), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-168.794, 84.456), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-177.593, 84.257), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-166.275, 84.110), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-159.535, 83.474), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-172.273, 84.583), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-168.981, 83.790), "�����-���������")
    ], "my#style5"),

    createGroup("������ �������", 6, [
      createPlacemark(new YMaps.GeoPoint(-169.439, 84.412), "������ ���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-160.518, 83.840), "������� �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-159.372, 83.387), "������ ���������� ����"),
      createPlacemark(new YMaps.GeoPoint(-163.785, 84.512), "���� �����"),
      createPlacemark(new YMaps.GeoPoint(-165.284, 84.254), "��������� ���"),
      createPlacemark(new YMaps.GeoPoint(-177.109, 84.425), "������ �������� ���"),
      createPlacemark(new YMaps.GeoPoint(-164.381, 83.555), "������� ���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-171.470, 84.347), "��� �������"),
      createPlacemark(new YMaps.GeoPoint(-161.683, 84.071), "��������� �������"),
      createPlacemark(new YMaps.GeoPoint(-169.215, 83.549), "��� �������")
    ], "my#style6"),

    createGroup("���������� �����", 7, [
      createPlacemark(new YMaps.GeoPoint(-162.348, 83.491), "���������"),
      createPlacemark(new YMaps.GeoPoint(-164.743, 84.568), "��������"),
      createPlacemark(new YMaps.GeoPoint(-167.656, 84.402), "����� �����"),
      createPlacemark(new YMaps.GeoPoint(-178.651, 84.391), "��������"),
      createPlacemark(new YMaps.GeoPoint(-164.802, 84.282), "��������"),
      createPlacemark(new YMaps.GeoPoint(-158.408, 83.971), "���������"),
      createPlacemark(new YMaps.GeoPoint(-168.860, 84.616), "����������"),
      createPlacemark(new YMaps.GeoPoint(-159.642, 84.061), "������"),
      createPlacemark(new YMaps.GeoPoint(-164.180, 84.250), "����������")
    ], "my#style7"),

    createGroup("�����", 8, [
      createPlacemark(new YMaps.GeoPoint(-159.789, 83.617), "������� �����"),
      createPlacemark(new YMaps.GeoPoint(-160.720, 84.341), "����� \"���������\""),
      createPlacemark(new YMaps.GeoPoint(-160.894, 84.330), "����� ������")
    ], "my#style8"),

    createGroup("����", 9, [
      createPlacemark(new YMaps.GeoPoint(-160.991, 83.423), "����� ���������"),
      createPlacemark(new YMaps.GeoPoint(-163.513, 84.175), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-166.153, 83.930), "������� �������"),
      createPlacemark(new YMaps.GeoPoint(-170.875, 83.851), "������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-165.940, 84.581), "��������� - �����"),
      createPlacemark(new YMaps.GeoPoint(-169.006, 84.056), "�������� ���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-160.957, 83.586), "��� �������"),
      createPlacemark(new YMaps.GeoPoint(-172.209, 83.615), "�������� ���������� ������"),
      createPlacemark(new YMaps.GeoPoint(-165.550, 84.192), "�������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-169.102, 83.471), "�������� ����"),
      createPlacemark(new YMaps.GeoPoint(-162.465, 84.254), "����������"),
      createPlacemark(new YMaps.GeoPoint(-177.199, 84.778), "�������� ���������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-175.224, 84.362), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-162.805, 83.654), "�������� �������"),
      createPlacemark(new YMaps.GeoPoint(-161.463, 83.939), "�������� �������"),
      createPlacemark(new YMaps.GeoPoint(-163.478, 84.008), "���� ����"),
      createPlacemark(new YMaps.GeoPoint(-169.906, 84.097), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-159.729, 83.711), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-167.572, 84.485), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-162.883, 84.431), "���� ������"),
      createPlacemark(new YMaps.GeoPoint(-167.261, 83.590), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-173.125, 83.993), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-172.406, 84.521), "���� �������"),
      createPlacemark(new YMaps.GeoPoint(-166.688, 84.536), "���� ����������"),
      createPlacemark(new YMaps.GeoPoint(-175.435, 84.765), "���� ��������"),
      createPlacemark(new YMaps.GeoPoint(-176.845, 84.452), "����������"),
      createPlacemark(new YMaps.GeoPoint(-166.844, 84.693), "���� ������������ ����")                	
    ], "my#style9"),

    createGroup("������ ���������", 10, [
      createPlacemark(new YMaps.GeoPoint(-165.317, 84.315), "������� �������"),
      createPlacemark(new YMaps.GeoPoint(-169.053, 84.145), "������ �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-166.939, 84.363), "��� �������"),
      createPlacemark(new YMaps.GeoPoint(-167.915, 84.582), "������� �������"),
      createPlacemark(new YMaps.GeoPoint(-173.153, 84.266), "������ ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-162.868, 84.058), "������ ��������� ����"),
      createPlacemark(new YMaps.GeoPoint(-171.336, 84.037), "������ ������ ������"),
      createPlacemark(new YMaps.GeoPoint(-161.097, 84.083), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-169.207, 83.987), "������� �������"),
      createPlacemark(new YMaps.GeoPoint(-163.953, 84.110), "�������� �����"),
      createPlacemark(new YMaps.GeoPoint(-165.042, 84.082), "����� ������"),
      createPlacemark(new YMaps.GeoPoint(-168.173, 84.389), "���� �������� ����")
    ], "my#style10"),

    createGroup("����", 11, [
      createPlacemark(new YMaps.GeoPoint(-171.981, 83.739), "������������ ����"),
      createPlacemark(new YMaps.GeoPoint(-170.656, 84.229), "���� ������� �����"),
      createPlacemark(new YMaps.GeoPoint(-161.549, 84.119), "���� ������� �����"),
      createPlacemark(new YMaps.GeoPoint(-158.282, 83.638), "���� ��������"),
      createPlacemark(new YMaps.GeoPoint(-165.826, 84.382), "������� ����")
    ], "my#style11"),

    createGroup("��������� ������", 12, [
      createPlacemark(new YMaps.GeoPoint(-170.252, 84.581), "�������� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-169.259, 84.697), "����� ����� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-166.182, 84.667), "���������� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-178.037, 84.336), "������ - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-172.561, 84.179), "������� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-159.344, 84.026), "������� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-172.962, 83.838), "������� - ��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-164.618, 83.615), "���� - ��������� ������")
    ], "my#style12"),

    createGroup("���������������������", 13, [
      createPlacemark(new YMaps.GeoPoint(-166.006, 83.857), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-176.963, 84.070), "������ ������ �������"),
      createPlacemark(new YMaps.GeoPoint(-166.617, 84.405), "����� ������"),
      createPlacemark(new YMaps.GeoPoint(-172.612, 84.088), "�������� �������"),
      createPlacemark(new YMaps.GeoPoint(-167.103, 83.730), "�������� �����"),
      createPlacemark(new YMaps.GeoPoint(-178.627, 84.474), "��������� ���������� ������"),
      createPlacemark(new YMaps.GeoPoint(-174.292, 83.931), "��� ������ �����"),
      createPlacemark(new YMaps.GeoPoint(-164.236, 83.620), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-160.436, 83.387), "����� ������"),
      createPlacemark(new YMaps.GeoPoint(-176.998, 84.184), "���� �������� ������")
    ], "my#style13"),

    createGroup("����", 14, [
      createPlacemark(new YMaps.GeoPoint(-165.490, 84.634), "������� ����"),
      createPlacemark(new YMaps.GeoPoint(-171.825, 84.837), "�������� - ����")
    ], "my#style14"),

    createGroup("�����", 15, [
      createPlacemark(new YMaps.GeoPoint(-173.587, 83.915), "������� �����"),
      createPlacemark(new YMaps.GeoPoint(-169.338, 84.502), "�������� �����"),
      createPlacemark(new YMaps.GeoPoint(-162.076, 84.567), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-160.144, 84.164), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-168.617, 83.795), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-162.254, 83.938), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-177.484, 84.231), "����� ���������"),
      createPlacemark(new YMaps.GeoPoint(-178.487, 84.131), "����� ����� ����"),
      createPlacemark(new YMaps.GeoPoint(-158.048, 83.604), "����� ���������� ����"),
      createPlacemark(new YMaps.GeoPoint(-160.654, 83.873), "����� �������� �����")
    ], "my#style15"),

    createGroup("�����", 16, [
      createPlacemark(new YMaps.GeoPoint(-163.823, 84.439), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-176.645, 84.274), "�������������� ���� \"������ ������\""),
      createPlacemark(new YMaps.GeoPoint(-169.834, 84.406), "���������� �������"),
      createPlacemark(new YMaps.GeoPoint(-170.188, 84.263), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-171.576, 83.673), "����������� �����"),
      createPlacemark(new YMaps.GeoPoint(-161.943, 84.595), "����� �����������"),
      createPlacemark(new YMaps.GeoPoint(-170.156, 84.541), "����� ��������"),
      createPlacemark(new YMaps.GeoPoint(-162.318, 84.795), "����� ��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-168.033, 84.653), "����� ������ ������"),
      createPlacemark(new YMaps.GeoPoint(-167.296, 83.781), "�������� ������ �������")
    ], "my#style16"),

    createGroup("�������� �����", 17, [
      createPlacemark(new YMaps.GeoPoint(-162.822, 83.554), "���������"),
      createPlacemark(new YMaps.GeoPoint(-159.342, 83.936), "���������"),
      createPlacemark(new YMaps.GeoPoint(-175.601, 83.953), "������"),
      createPlacemark(new YMaps.GeoPoint(-178.805, 84.057), "������� �����"),
      createPlacemark(new YMaps.GeoPoint(-176.182, 84.585), "�������� ������"),
      createPlacemark(new YMaps.GeoPoint(-169.230, 83.886), "�������� ���"),
      createPlacemark(new YMaps.GeoPoint(-165.440, 83.544), "�������� ����"),
      createPlacemark(new YMaps.GeoPoint(-168.563, 84.321), "���������"),
      createPlacemark(new YMaps.GeoPoint(-176.382, 84.650), "����������"),
      createPlacemark(new YMaps.GeoPoint(-163.814, 84.793), "�������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-164.615, 84.038), "�������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-170.113, 84.244), "������� �����"),
      createPlacemark(new YMaps.GeoPoint(-164.082, 83.760), "��� ���������"),
      createPlacemark(new YMaps.GeoPoint(-166.004, 84.323), "����������"),
      createPlacemark(new YMaps.GeoPoint(-165.099, 84.464), "������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-160.249, 84.405), "������ ������"),
      createPlacemark(new YMaps.GeoPoint(-164.669, 83.773), "������ ������������ �����"),
      createPlacemark(new YMaps.GeoPoint(-170.441, 84.376), "�����������"),
      createPlacemark(new YMaps.GeoPoint(-168.900, 84.241), "������ ����� ���"),
      createPlacemark(new YMaps.GeoPoint(-176.523, 84.581), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-171.672, 84.292), "������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-174.197, 83.926), "����� ���������� ������"),
      createPlacemark(new YMaps.GeoPoint(-179.016, 84.299), "���������"),
      createPlacemark(new YMaps.GeoPoint(-170.191, 84.720), "����� ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-163.959, 84.646), "�������"),
      createPlacemark(new YMaps.GeoPoint(-170.677, 83.715), "�������� ������� �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-170.570, 83.684), "����� ������� �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-165.794, 84.449), "���������� ������"),
      createPlacemark(new YMaps.GeoPoint(-160.964, 84.537), "������� ������ - ���������"),
      createPlacemark(new YMaps.GeoPoint(-173.144, 83.656), "���������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-172.906, 84.448), "��������"),
      createPlacemark(new YMaps.GeoPoint(-170.413, 84.626), "���������"),
      createPlacemark(new YMaps.GeoPoint(-171.813, 84.645), "���������"),
      createPlacemark(new YMaps.GeoPoint(-158.882, 83.453), "���������"),
      createPlacemark(new YMaps.GeoPoint(-168.548, 84.534), "��������")
    ], "my#style17"),

    createGroup("�������� �����", 18, [
      createPlacemark(new YMaps.GeoPoint(-164.975, 84.137), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-172.334, 83.773), "����� ����������"),
      createPlacemark(new YMaps.GeoPoint(-174.765, 83.945), "����� ����������"),
      createPlacemark(new YMaps.GeoPoint(-163.555, 83.800), "�������"),
      createPlacemark(new YMaps.GeoPoint(-175.754, 84.302), "����������� �����"),
      createPlacemark(new YMaps.GeoPoint(-179.261, 84.030), "���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-170.147, 83.616), "������� �����"),
      createPlacemark(new YMaps.GeoPoint(-175.062, 84.225), "���� �������� �����"),
      createPlacemark(new YMaps.GeoPoint(-167.970, 83.727), "����� ������ �������")
    ], "my#style18"),

    createGroup("�������� �����", 19, [
      createPlacemark(new YMaps.GeoPoint(-177.332, 84.008), "������-���"),
      createPlacemark(new YMaps.GeoPoint(-161.479, 83.468), "���������"),
      createPlacemark(new YMaps.GeoPoint(-177.683, 84.594), "��� ������"),
      createPlacemark(new YMaps.GeoPoint(-160.266, 84.199), "���������")
    ], "my#style19"),

    createGroup("������", 20, [
      createPlacemark(new YMaps.GeoPoint(-164.845, 84.492), "������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.345), "�������� ������ �������� ����"),
      createPlacemark(new YMaps.GeoPoint(-171.787, 84.326), "����� ������ �������� ����")
    ], "my#style20"),

    createGroup("���������", 21, [
      createPlacemark(new YMaps.GeoPoint(-167.352, 84.759), "����������� �������"),
      createPlacemark(new YMaps.GeoPoint(-167.384, 84.035), "��������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-160.355, 83.573), "�������� \"���������\""),
      createPlacemark(new YMaps.GeoPoint(-158.035, 83.559), "���������� \"������ ������\""),
      createPlacemark(new YMaps.GeoPoint(-161.423, 84.213), "���� ���"),
      createPlacemark(new YMaps.GeoPoint(-175.487, 84.095), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-165.041, 84.408), "������� \"������ ������\""),
      createPlacemark(new YMaps.GeoPoint(-173.636, 84.764), "���������� ����������"),
      createPlacemark(new YMaps.GeoPoint(-161.286, 84.285), "����� \"������ ������\""),
      createPlacemark(new YMaps.GeoPoint(-171.477, 83.641), "������� ������� ��������")
    ], "my#style21"),

    createGroup("������", 22, [
      createPlacemark(new YMaps.GeoPoint(-175.211, 84.458), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-170.835, 84.295), "��� �������"),
      createPlacemark(new YMaps.GeoPoint(-174.303, 84.755), "�������� �������"),
      createPlacemark(new YMaps.GeoPoint(-171.053, 84.660), "����������� ������"),
      createPlacemark(new YMaps.GeoPoint(-168.019, 84.515), "��� ������"),
      createPlacemark(new YMaps.GeoPoint(-170.583, 83.506), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-172.286, 83.819), "��������� ������"),
      createPlacemark(new YMaps.GeoPoint(-160.004, 84.354), "���� ���������"),
      createPlacemark(new YMaps.GeoPoint(-162.287, 84.180), "������ ������"),
      createPlacemark(new YMaps.GeoPoint(-169.651, 83.687), "�������� �������"),
      createPlacemark(new YMaps.GeoPoint(-173.145, 84.391), "������ ���������"),
      createPlacemark(new YMaps.GeoPoint(-165.118, 83.639), "������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-169.074, 83.830), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-174.271, 84.241), "������ �����"),
      createPlacemark(new YMaps.GeoPoint(-173.173, 84.565), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-163.726, 83.531), "������ �����")              	
    ], "my#style22"),

    createGroup("�������/����� ���������������", 23, [
      createPlacemark(new YMaps.GeoPoint(-172.034, 84.733), "\"�������\""),
      createPlacemark(new YMaps.GeoPoint(-172.071, 84.805), "\"������������� �����\""),
      createPlacemark(new YMaps.GeoPoint(-166.252, 84.815), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-171.011, 84.735), "����� �������� \"�������� �� ����\""),
      createPlacemark(new YMaps.GeoPoint(-161.343, 84.723), "����� �������� \"�������� ���� ����\""),
      createPlacemark(new YMaps.GeoPoint(-159.512, 84.505), "����� �������� \"������ �����\""),
      createPlacemark(new YMaps.GeoPoint(-169.269, 84.790), "����� �������� \"�������� ������\""),
      createPlacemark(new YMaps.GeoPoint(-164.494, 84.768), "���� ���������"),
      createPlacemark(new YMaps.GeoPoint(-175.823, 84.848), "����� ������")
    ], "my#style23"),

    createGroup("������������ ���������", 24, [
      createPlacemark(new YMaps.GeoPoint(-162.856, 84.570), "��������� �����"),
      createPlacemark(new YMaps.GeoPoint(-169.167, 84.431), "��������� �������� ������"),
      createPlacemark(new YMaps.GeoPoint(-177.295, 84.367), "��������� ��������"),
      createPlacemark(new YMaps.GeoPoint(-174.407, 84.685), "������ �������"),
      createPlacemark(new YMaps.GeoPoint(-160.006, 84.292), "������� ������")
    ], "my#style24"),

    createGroup("�������", 25, [
      createPlacemark(new YMaps.GeoPoint(-168.098, 84.080), "������� - �������"),
      createPlacemark(new YMaps.GeoPoint(-161.503, 84.291), "��������� - �������"),
      createPlacemark(new YMaps.GeoPoint(-178.735, 84.182), "������� - �������"),
      createPlacemark(new YMaps.GeoPoint(-159.456, 83.591), "������ - �������"),
      createPlacemark(new YMaps.GeoPoint(-173.334, 84.672), "����� �����")
    ], "my#style25"),

    createGroup("������ ������� ����", 26, [
      createPlacemark(new YMaps.GeoPoint(-174.309, 84.633), "��������� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-169.770, 84.608), "�������� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-164.215, 84.343), "����� ����� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-175.822, 84.425), "������ - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-166.193, 84.049), "������� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-166.923, 83.696), "������� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-162.654, 83.755), "���� - ������ ������� ����"),
      createPlacemark(new YMaps.GeoPoint(-160.996, 84.444), "���������� - ������ ������� ����")
    ], "my#style26"),

    createGroup("�����", 27, [
      createPlacemark(new YMaps.GeoPoint(-164.858, 83.763), "���������"),
      createPlacemark(new YMaps.GeoPoint(-174.857, 84.602), "�������� ����"),
      createPlacemark(new YMaps.GeoPoint(-159.951, 83.782), "������ ����"),
      createPlacemark(new YMaps.GeoPoint(-176.597, 84.364), "����������"),
      createPlacemark(new YMaps.GeoPoint(-167.890, 83.873), "��������"),
      createPlacemark(new YMaps.GeoPoint(-173.859, 84.186), "���������"),
      createPlacemark(new YMaps.GeoPoint(-168.194, 83.667), "������")
    ], "my#style27"),

    createGroup("���������� �����", 28, [
      createPlacemark(new YMaps.GeoPoint(-177.108, 84.689), "����� ����� �����"),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.216), "����� ���������� �����"),
      createPlacemark(new YMaps.GeoPoint(-163.760, 84.053), "����������� ������"),
      createPlacemark(new YMaps.GeoPoint(-159.564, 84.355), "������ ��������"),
      createPlacemark(new YMaps.GeoPoint(-175.020, 84.807), "����� ������� �������"),
      createPlacemark(new YMaps.GeoPoint(-166.104, 84.534), "���������� ����� �������"),
      createPlacemark(new YMaps.GeoPoint(-158.044, 83.433), "���������� ����� ���������"),
      createPlacemark(new YMaps.GeoPoint(-162.276, 83.755), "���������� ����� �����"),
      createPlacemark(new YMaps.GeoPoint(-159.681, 83.841), "���������� ����� ����"),
      createPlacemark(new YMaps.GeoPoint(-171.108, 83.709), "������� - ���������� �����")
    ], "my#style28"),

    createGroup("��������", 29, [
      createPlacemark(new YMaps.GeoPoint(-167.370, 84.087), "����� \"�������� �������\""),
      createPlacemark(new YMaps.GeoPoint(-167.348, 84.289), "����� �����"),
      createPlacemark(new YMaps.GeoPoint(-168.089, 84.041), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-178.367, 84.180), "����� �������"),
      createPlacemark(new YMaps.GeoPoint(-162.841, 83.718), "����� ������"),
      createPlacemark(new YMaps.GeoPoint(-159.829, 83.487), "����� ����������"),
      createPlacemark(new YMaps.GeoPoint(-167.229, 84.113), "����� ����� �����")
    ], "my#style29"),

    createGroup("���������", "30", [
      createPlacemark(new YMaps.GeoPoint(-162.928, 84.323), "������� ����"),
      createPlacemark(new YMaps.GeoPoint(-161.701, 83.563), "������� ������"),
      createPlacemark(new YMaps.GeoPoint(-163.017, 84.103), "��������� \"�������\""),
      createPlacemark(new YMaps.GeoPoint(-171.614, 83.802), "���������� ���������"),
      createPlacemark(new YMaps.GeoPoint(-173.503, 84.641), "�������� - ���������")
    ], "my#style30"),
  ];
  //������ - �����

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