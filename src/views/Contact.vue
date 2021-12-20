<template>
  <div id="main">

    <section>

      <h2>お問い合わせ</h2>
      <p>当ページと同じ３項目のお問い合わせフォーム（自動フォーム試用版）を簡単に使えるようにセットしています。<br>
        <span style="color: red;">※当ページ（contact.html）はフォームの見本ページです。実際の自動フォームには使いませんのでご注意下さい。</span></p>
      <p><strong class="color1">■自動フォームを使う場合（※編集に入る前にご確認下さい）</strong><br>
        あなたのメールアドレス設定と、簡単な編集だけで使えます。<a href="https://template-party.com/file/formgen_manual_set2.html" target="_blank">こちらのマニュアルをご覧下さい。</a>
      </p>
      <p><strong class="color1">■自動フォームを使わない場合</strong><br>
        テンプレートに梱包されている「form.html」「confirm.html」「finish.html」の3枚のファイルを削除して下さい。</p>

      <table class="ta1">
        <tbody>
        <tr>
          <th>お名前※</th>
          <td><input class="ws" name="お名前" size="30" type="text"></td>
        </tr>
        <tr>
          <th>メールアドレス※</th>
          <td><input class="ws" name="メールアドレス" size="30" type="text"></td>
        </tr>
        <tr>
          <th>お問い合わせ詳細※</th>
          <td><textarea class="wl" cols="30" name="お問い合わせ詳細" rows="10"></textarea></td>
        </tr>
        </tbody>
      </table>

      <p class="c">
        <input class="btn" type="submit" value="内容を確認する">
      </p>

    </section>

  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
