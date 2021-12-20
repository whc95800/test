<template>
  <section>

    <h2>売買物件</h2>

    <div class="list">
      <router-link to="/Item/123" @click="goItem = false">
        <h4>物件タイトル</h4>
        <figure><img alt="" src="images/sample1.jpg"></figure>
        <table>
          <tbody>
          <tr>
            <th>所在地</th>
            <td>東京都XXXX</td>
            <th>価格</th>
            <td>XXXX円</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
          </tr>
          </tbody>
        </table>
        <span class="date">【登録日:20XX/XX/XX】【更新日:20XX/XX/XX】</span>
      </router-link>
    </div>

    <div class="list">
      <a href="item.html">
        <h4>物件タイトル</h4>
        <figure><img alt="" src="images/sample1.jpg"></figure>
        <table>
          <tbody>
          <tr>
            <th>所在地</th>
            <td>東京都XXXX</td>
            <th>価格</th>
            <td>XXXX円</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
          </tr>
          </tbody>
        </table>
        <p>右上の「おすすめ」の文字情報はhtml側で直接変更できます。
          <span class="option1">おすすめ</span><br>
          <span style="color:red">&lt;span class="option1"&gt;おすすめ&lt;/span&gt;</span><br>
          色はcssフォルダのstyle.cssの設定で変更できます。</p>
        <span class="date">【登録日:20XX/XX/XX】【更新日:20XX/XX/XX】</span>
        <span class="option1">おすすめ</span>
      </a>
    </div>

    <div class="list option2">
      <a href="item.html">
        <h4>物件タイトル</h4>
        <figure><img alt="" src="images/sample1.jpg"></figure>
        <table>
          <tbody>
          <tr>
            <th>所在地</th>
            <td>東京都XXXX</td>
            <th>価格</th>
            <td>XXXX円</td>
          </tr>
          <tr>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
            <th>見出し</th>
            <td>サンプルテキスト。</td>
          </tr>
          </tbody>
        </table>
        <p>右上の「ご契約済」の文字情報はhtml側で直接変更できます。
          <span class="option2">ご契約済</span><br>
          <span style="color:red">&lt;span class="option2"&gt;ご契約済&lt;/span&gt;</span><br>
          色はcssフォルダのstyle.cssの設定で変更できます。<br>
          また、画像を半透明にするには、<br>
          &lt;div class="list <span style="color:red">option2</span>"&gt;<br>
          として下さい。</p>
        <span class="date">【登録日:20XX/XX/XX】【更新日:20XX/XX/XX】</span>
        <span class="option2">ご契約済</span>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  name: "showItems"
}
</script>

<style scoped>

</style>
