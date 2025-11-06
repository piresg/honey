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
      { icon: 'linkedin', link: 'https://media.licdn.com/dms/image/v2/D4D03AQGa2VJvoVx5Qw/profile-displayphoto-scale_200_200/B4DZkaBsnkIEAw-/0/1757078277380?e=1764201600&v=beta&t=CcuxuzFmEs2Ur3yy5aFjX9Px4tvjKzeBS1dhrQ3rR9g' },
   
    ]
  }   
]
</script>

## Contributors


<VPTeamMembers size="small" :members="members" />
