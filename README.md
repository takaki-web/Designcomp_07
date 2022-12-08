# 各サイト共通設計　意識した事

## 【CSS設計：PDFLOCSS】

https://zenn.dev/wagashi_osushi/books/94efd21a66ccaa

CSS設計としてPDFLOCSSを採用しました。理由としましては

・体系的にまとめられていて初心者でも理解しやすかった。

・要素をページとセクションで分割するので基準が明確。

・基準が明確なのでclass名で悩む事がなくなる。

以上の理由からPDFLOCSSを採用しました。

## 【marginの統一】

marginをtopとleftのみ使用するように統一。※Designcomp_05～。

## 【サイトスピード改善】

サイトスピード改善のために、画像は全てwebpに。

jQueryが重いので全てvanillaJSに書き換え。

## 【チェックリスト】

下記のチェックリストを元にチェックしました。

https://puffy-trout-b0f.notion.site/e693b98ef94b474fabf635558a31147f?v=33836d24d0054fe89c8a598add46f04d
