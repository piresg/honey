---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "{in}secure"
  text: "Honey Snippers"
  tagline: Snap snippets can capture key information quickly for easy reference later on!

  actions:
    - theme: brand
      text: SASE
      link: /sase/sase
    - theme: brand
      text: PAN-OS
      link: /panos/panos
    - theme: brand
      text: Cortex Cloud
      link: /cortex/cortex


---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/images/gpires.png',
    name: 'Gonçalo Pires',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/piresg/' },
   
    ]
  },
    {
    avatar: '/images/nmarques.png',
    name: 'Nuno Marques',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nuno-marques-20a47932/' },
   
    ]
  },
   

]
</script>

## Contributors


<VPTeamMembers size="small" :members="members" />
