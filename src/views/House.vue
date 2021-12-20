<template>


  <article>

    <h2>物件詳細<span class="option1">おすすめ</span></h2>
    <p>小さな端末環境(幅800px以下端末)では、sub,side,footermenuブロックが非表示になります。その他のページでも非表示にしたい場合、html側の&lt;body&gt;タグを&lt;body
      class="s-n"&gt;として下さい。もしclass指定が２つ以上ある場合は半角スペースで区切って入力すればOKです。例：&lt;body class="s-n sample"&gt;</p>

    <figure id="item-image" class="mb15 c">
      <img id="item_image1" alt="写真の説明を入れます" src="../../images/sample1_big.jpg">
      <img id="item_image2" alt="写真の説明を入れます" src="../../images/sample1_big.jpg">
      <p id="imgcaption">詳細画像１の説明文をここに入れます</p>
    </figure>

    <p class="c">
      <img alt="詳細画像１の説明文をここに入れます" class="thumbnail" src="../../images/sample1_big.jpg" @click="">
      <img alt="詳細画像２の説明文をここに入れます" class="thumbnail" src="../../images/sample2.jpg">
      <img alt="詳細画像３の説明文をここに入れます。この画像だけ他の画像より高さが高くなっています。縦横比は統一しておいた方が綺麗に移り変わります。" class="thumbnail"
           src="../../images/sample3.jpg">
      <img alt="詳細画像４の説明文をここに入れます" class="thumbnail" src="../../images/sample4.jpg">
      <img alt="詳細画像５の説明文をここに入れます" class="thumbnail" src="../../images/sample5.jpg">
    </p>

    <table class="ta1">
      <tbody>
      <tr>
        <th class="tamidashi" colspan="2">見出しが必要であればここを使います</th>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      <tr>
        <th>見出し</th>
        <td>ここに説明など入れて下さい。サンプルテキスト。</td>
      </tr>
      </tbody>
    </table>

    <p class="c">
      (このボタンのリンクは繋がっていません。必要に応じて設定して下さい。)<br>
      <input class="btn" type="submit" value="この物件に問い合わせをする">
    </p>

  </article>

  <p class="mb30"><a href="javascript:history.back()">&lt;&lt; 前のページに戻る</a></p>

  <section>

    <h3>イメージチェンジプログラム（imgchg_pack.js）の使い方</h3>
    <p><strong class="color1">※当プログラムは<a href="http://www.crytus.co.jp/">有限会社クリタス</a>様開発のプログラムです。imgchg_pack.jsは改変せずにご利用下さい。また、当社以外のテンプレートにプログラムのみを使う場合は<a
        href="https://template-party.com/free_program/program2_license.html">こちらの規約</a>をお守り下さい。</strong></p>
    <p>■解説</p>
    <p>サムネイル画像をクリックすると、上の大きな写真が入れ替わります。</p>
    <p>html側を見れば分かりますが、大きな画像の読みこみ行は<strong>２行</strong>あります。違う点はidの指定名が異なるだけですが必ず２行入れて下さい。この２枚の画像と、サムネイルの１枚目の画像名は合わせておいて下さい。
    </p>
    <p>サムネイルを増やしたい場合はhtml側のサムネイルの行をコピペで増やし、画像ファイル名やalt指定（今回の場合は大きな写真下に表示される説明文になります）を入れ替えて下さい。</p>
    <p><strong>サムネイルと拡大画像は兼用</strong>です。<strong>画像の縦横比率はすべて統一</strong>しておいた方がきれいに入れ替わります。<br>
      サムネイルのサイズはcssフォルダのstyle.cssの「.thumbnail」のwidthとheightの値で変更できます。<br>
      画像は、コンテンツ幅より小さい画像だと表示に問題が出るのでできるだけ<strong>大きな画像</strong>を用意しておいて下さい。<br>
      imgchg_pack.jsはhtmlの下の方に読み込んでいます。別のページで使う場合はコピーするのを忘れずに。</p>

  </section>
</template>

<script>
export default {
  name: "House"
}
</script>

<style lang="less">
/*詳細ページの画像切り替え（imgchg_pack.js）※一般のhtmlテンプレートで利用。
---------------------------------------------------------------------------*/
/*大きな画像のボックスと説明文を入れるボックス*/
#item-image {
  position: relative;
}

/*大きな画像の１行目*/
#item-image #item_image1 {
  z-index: 2;
  position: relative;
  overflow: hidden;
}

/*大きな画像の２行目*/
#item-image #item_image2 {
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
}

/*サムネイル画像*/
.thumbnail {
  width: 80px; /*画像の幅*/
  height: 80px; /*画像の高さ*/
  border: 1px solid #dcdcdc; /*枠線の幅、線種、色*/
  margin-bottom: 15px;
}

.thumbnail:hover {
  border: 1px solid #999; /*マウスオン時の枠線の幅、線種、色*/
}
</style>
