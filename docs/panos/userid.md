# User-ID Integrated Agent

## Create Service Account

**DO NOT SKIP THIS**
::: warning
We must start to create a service account by following the official [documentation](https://docs.paloaltonetworks.com/pan-os/11-0/pan-os-admin/user-id/map-ip-addresses-to-users/create-a-dedicated-service-account-for-the-user-id-agent). 
:::


## Retrieve UserID from Windows Active Directory Server

To Connect a PA Firewall to an existing active directory we must configure the UserID Agent Setup

**Device> User Identification> User Mapping**



![](./images/1.png){data-zoomable}

Fill your domain information as follow:

- Username: your_domain\service_account
- Domains DNS Name: your domain name 
- Password: service account password
- Kerberos Server profile: create new

## Kerberos Server profile:

Choose a Profile name and declare your domain controllers that your Firewall can reach.

![](./images/2.png){data-zoomable}


## Server Monitor

Chose type as Microsoft Active Directory and WINRM-HTTP as Transport protocol.

Network address is the FQDN of the server with AD Role.

**Tip**: if you Hit Discover on Server Monitor these will be populated automatically. 

![](./images/3.png){data-zoomable}



If everything was setup correctly you should see Status **Connected**.


![](./images/4.png){data-zoomable}


**IMPORTANT**

::: danger
The service account user **MUST** be on Remote Management Users Builtin Group or you will get an **_Access Denied_** message.
:::
![](./images/5.png){data-zoomable}


Published by Gonçalo Pires



<script setup>
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

onMounted(() => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
});
</script>

<style>
.medium-zoom-overlay {
  z-index: 30;
}

.medium-zoom-image {
  z-index: 31;
}
</style>