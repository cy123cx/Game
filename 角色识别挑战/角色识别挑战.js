  // 获取开始按钮元素
  const startButton = document.getElementById('startButton');
  // 获取图片容器元素
  const imageContainer = document.getElementById('imageContainer');
  // 获取所有图片元素
  const images = document.getElementsByClassName('image');
  // 存储正确的图片类名
  const correctImages = ['correct1', 'correct2', 'correct3', 'correct4', 'correct5', 'correct6', 'correct7', 'correct8', 'correct9', 'correct10', 'correct11', 'correct12', 'correct13'];
  // 存储随机选择的正确图片类名
  let selectedImageClass = '';

  // 点击开始按钮进入主页面
  startButton.addEventListener('click', function () {
      // 随机选择一个正确的图片类名
      selectedImageClass = correctImages[Math.floor(Math.random() * correctImages.length)];
      // 弹窗显示要选择的名字
      let selectedImageName = document.querySelector(`.${selectedImageClass}`).textContent;
      alert('请选出' + selectedImageName + '吧小宝');
      // 分散图片
      scatterImages();
  });

  // 图片点击事件
  imageContainer.addEventListener('click', function (event) {
      const selectedImage = event.target;
      // 判断是否点击到了图片
      if (selectedImage.classList.contains('image')) {
          // 判断是否选择正确的图片
          if (selectedImage.classList.contains(selectedImageClass)) {
              // 弹窗显示选择正确
              alert('乖乖，你真聪明，选对啦！');
          } else {
              // 弹窗显示选择错误
              alert('不对哦小宝，你这小脑袋瓜应该很快就选出正确答案咯');
          }
      }
  });

  // 分散图片
  function scatterImages() {
      // 获取图片容器的宽度和高度
      const containerWidth = imageContainer.offsetWidth;
      const containerHeight = imageContainer.offsetHeight;

      // 遍历所有图片元素，随机分布在容器内
      for (let i = 0; i < images.length; i++) {
          const image = images[i];
          // 生成随机的left和top值
          const randomLeft = Math.floor(Math.random() * (containerWidth - image.offsetWidth));
          const randomTop = Math.floor(Math.random() * (containerHeight - image.offsetHeight));
          // 设置图片的位置
          image.style.left = randomLeft + 'px';
          image.style.top = randomTop + 'px';
      }
  }