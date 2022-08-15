---
title: SavvyGarden
slug: savvygarden
excerpt: SavvyGarden started as a weekend project to build a comprehensive database of companion plants that I could use to plan our food production efforts on the farm.
project_type: Web App
company: Internal
contact: NA
order: 
featured: true
thumb: "/media/work/savvygarden-v2.png"
image: "/media/work/savvygarden-v2.png"
gallery:
- thumb: "/media/work/savvygarden-v2.png"
  full: "/media/work/savvygarden-v2.png"
  alt: "Home"
  title: "Home"
- thumb: "/media/work/savvygarden-guilds.png"
  full: "/media/work/savvygarden-guilds.png"
  alt: "Guilds Index"
  title: "WIP Shop Layout"
- thumb: "/media/work/savvygarden-shop.png"
  full: "/media/work/savvygarden-shop.png"
  alt: "Shop Index"
  title: "Shop Index"
url: https://savvygarden.app
status: Online
services: ['UI Design','Wireframing','Prototyping','Development']
tools: ['Figma']
stack: ['Vue', 'Airtable', 'Gridsome', 'CommerceJS', 'TailwindCSS']
testimonial: 
launch_date: 2021-02-01
---
SavvyGarden started as a fun weekend project to create a searchable list of companion plants that I could use as a reference tool for the farm. I used Airtable to easily maintain the list of plants, along with their friends and foes. I chose Gridsome as the static site generator, Tailwind for the front-end styling and configured it up as a progressive-web-app (otherwise known as a PWA).

The first version was intentionally simple, with an auto focussed search input, making it easy to filter the results to find the plant you're looking for. 

I also added an extra column to the plants sheet for "other names" to use it as a lookup field for the search. That way, if you type in coriander, dhania, or cilantro the correct result would show up.

I recently released an update, which adds the following improvements:

- Increases the plant count to 200
- New section for plant guilds
- Some much-needed design love
- New ways to filter and view the content
- Dark-mode

I'm currently working on a built-in shop to sell gardening-related merch, music, posters, jewelry, and art. The shop is being built from scratch in Gridsome, using CommerceJS as the headless commerce backend. 

The app is free, works offline, has no tracking or ads, and will remain so. I may add a subscription service later, but that would for value-added tools and independent of the core app.