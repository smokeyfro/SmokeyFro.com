---
title:  Host your Ghost blog on Unubo for free
slug: host-your-ghost-blog-on-unubo-for-free
date: 2019-09-15
published: true
tags: ['ghost', 'hosting', 'unubo']
series: false
image: '/media/tutorials/unubo/unubo-cover.png'
canonical_url: false
topic: Tools of the Trade
difficulty: Easy
type: Article
searchTerms: unubo, ghost, hosting, headless, free, jamstack, tutorials, tuts, tutorial
excerpt: "I've used ServerPilot for years and it's been great for managing my 30+ installs, but I recently came across Unubo, which boasts a similar offering, but with a few key differences."
---
import Gallery from '@/components/Gallery'

Firstly, ServerPilot gives you two options when adding a new "app". The first is WordPress and the second is a blank LAMP stack. This is where Unubo shines, as they provide a whole bunch of useful options (like Static, Go, Rails, Node - to name but a few) and one of those is Ghost. 

Adding a new Ghost install is a matter of clicking the add button, selecting Ghost, give it a name, select a region and sit back as the magic happens. A minute or so later and you're new install will be ready.

Here are some screenies of the setup process:

<Gallery source="unubo" lightbox="true" />

I have my Ghost blog install setup with Unobo, linked to my write.smokeyfro.co sub-domain (more on my domain strategy later), with the content being pulled in via Gridsome and hosted on Netlify. I could technically host the main site on Unobo too, but for now I'm ok with it being on Netlify.

If you wanted to use Ghost as is, ie for the front-end of your site too, then you would go on the hunt for a theme best suited to your taste and start writing.

If you're like me and want to mix and match content from a bunch of different sources, then you would disable the Ghost front-end (kudos to the Ghost team for making this easy) and set Ghost as a source on what ever static site generator you're using. I'll cover setting up Ghost with Gridsome in another post.

TTFN,
SmokeyFro