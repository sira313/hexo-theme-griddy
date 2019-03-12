## Hexo Theme Griddy

> A hexo theme for artist gallery or portfolio sample

I created this theme by combine both of [Goyangin](https://github.com/g3xx/goyangin) and [Magnetic](https://github.com/g3xx/goyangin)

Live Demo : [Aflasio](https://aflasio.netlify.com). 
Demo Post : [Sample Post](https://aflasio.netlify.com/post/pepper-carrot-fanart/). 
This Theme is automatically generate your category by the front matter.

![demo](/images/blog/griddy.png)
![demo2](/images/blog/griddy2.png)

### Feature
 - Responsive 
 - Google Analytics
 - SEO
 - Disqus, Facebook, or Valine comment
 - Gallery with fancybox
 - Grid
### Installation
clone theme

```bash
git clone https://github.com/sira313/hexo-theme-griddy themes/griddy
```

modify file hexo `_config.yml` site

```bash
theme: griddy
```

And, Modify Config Theme in `/themes/griddy/_config.yml`
```yaml
menu:
  Home: /

# Default post title
default_post_title: Untitled

# Default post cover index page
default_cover_index: "/img/seira.jpg"

favicon: /img/favicon.png
logo: img/logo.svg #logo in header
profilpic: /img/450x450/seira.jpg
author: #name author in post (default)

comments:
  # Disqus comments
  # disqus_shortname:
  # Facebook comments
  #facebook:
    #appid: 558386947954045
    #comment_count: 5
    #comment_colorscheme: light
  # Valine comments https://valine.js.org
  valine:
    appid:  #your leancloud appid
    appkey:  #yourleancloud appkey
    notify: false # true/false:mail notify !!!Test,Caution.
    verify: false # true/false:verify code
    avatar: mm # avatar style https://github.com/xCss/Valine/wiki/avatar-setting-for-valine
    placeholder: Leave comment # comment box placeholder
    
google_analytics: #your google analytics

# if u want add more profile media social (icon same as Fontawesome)
#  just add name ex : Instagram: https://www.instagram.com/you/
social:
  Gitlab: https://gitlab.com/yourname
  Twitter: https://twitter.com/yourname
  Facebook: https://facebook.com/yourname
  #Google-plus: https://plus.google.com/104751165505597913805 i don't event know why i keep this, i just love g+ forever
  email: mailto:sira.argia@gmail.com
  #Instagram: https://www.instagram.com/yourname

# Code Highlight theme
# Available value:
#    default | normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: night eighties

```
### Getting Started with Post
1. Create post.`$ hexo new post "Oh Yeah!"`
2. Edit file in `source` > `post`
3. Category will autoload to the menu
4. You can load multi images in the header, just like this
```
---
title: Oh Yeah!
date: 2018-10-27 00:06:53
tags: 
  - digipaint
  - OC
  - male
  - black
  - red hair
  - red
categories: Digital Painting
cover_index: /img/450x450/seira.jpg
photos: 
- /img/seira.jpg
- /img/seira2.jpg
---
Here's the caption or description of your photos/

```
### Notes

- Your another page layout is not going to show as good because i still working on it.
- Maybe you have to create your own using html + bulma and import it useing ejs. My sample is on `layout` > `partial` > `headers.ejs`

### TODO

- [ ] Improve layout for another page
- [ ] Show post as modal

### Version Logs

- This maybe Beta Version 
> I am so sorry if you find any trouble 'cause for the real i just copy paste the script.
### Support Me

[![](https://i.ibb.co/BKRhBpK/paypal-donate-button-high-quality-png.png)](https://paypal.me/aflasio)