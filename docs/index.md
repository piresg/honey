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
  },
    {
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQF-Tk8kZ_suxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654776908119?e=1746662400&v=beta&t=6vTsMjbZUUgU0CcKknxt1XBc49PPJtZLSOVwORxCB0c",
    name: 'Nuno Marques',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nuno-marques-20a47932/' },
   
    ]
  },
      {
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQE0xPkcdDBo5A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702580571541?e=1746662400&v=beta&t=pxqGoI-whE8vHeiGS3uHEH6sLPKDakdb5LEfY5NOeSk",
    name: 'José Gonçalves',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/josegoncalves13/' },
   
    ]
  },
        {
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQFZkEPWXKuraQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1615828278649?e=1747267200&v=beta&t=5NcHrZCosgQLhLTkItqXaPt4rSW9jgfXdgWehCMAhHI",
    name: 'Luis Trincheiras',
    title: 'Creator',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/luis-trincheiras/' },
   
    ]
  },
   
]
</script>

## Contributors


<VPTeamMembers size="small" :members="members" />
