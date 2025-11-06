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
      link: /panos/userid
    - theme: brand
      text: Cortex Cloud
      link: /cortex/cortex

features:
  - icon: 🧰
    title: PANOSS
    link: 'https://paoss.insecure.pt'
    linkText: 'learn more'
    details: Feature
  - icon: 🔥
    title: Palo Alto Networks 
    link: 'https://docs.paloaltonetworks.com/'
    linkText: 'Official documentation'
    details: Documentation


---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQFe1c1fYGMkjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669229782572?e=1746662400&v=beta&t=A5R3tnR2-EvIVclHNeN63nIoMXK4gNIu83cGJU9_uQA',
    name: 'Gonçalo Pires',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/piresg/' },
   
    ]
  }   
]
</script>

## Contributors


<VPTeamMembers size="small" :members="members" />
