"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[497],{6497:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var o=t(641),s=t(3751);const l={class:"container mx-auto p-8"},r={class:"contact bg-secondary text-textPrimary p-8 shadow-md rounded-lg"},n=(0,o.Lk)("h1",{class:"text-3xl font-bold"},"Contact Me",-1),c={class:"mb-4"},m=(0,o.Lk)("label",{class:"block text-textPrimary"},"Name",-1),d={class:"mb-4"},u=(0,o.Lk)("label",{class:"block text-textPrimary"},"Email",-1),i={class:"mb-4"},b=(0,o.Lk)("label",{class:"block text-textPrimary"},"Message",-1),p=(0,o.Lk)("button",{type:"submit",class:"bg-primary text-white p-2 rounded-lg"},"Send",-1);function f(e,a,t,f,k,g){return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("section",r,[n,(0,o.Lk)("form",{onSubmit:a[3]||(a[3]=(0,s.D$)(((...e)=>g.saveContact&&g.saveContact(...e)),["prevent"])),class:"mt-4"},[(0,o.Lk)("div",c,[m,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>k.form.name=e),type:"text",class:"w-full p-2 border border-gray-300 rounded-lg",placeholder:"Your Name"},null,512),[[s.Jo,k.form.name]])]),(0,o.Lk)("div",d,[u,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>k.form.email=e),type:"email",class:"w-full p-2 border border-gray-300 rounded-lg",placeholder:"Your Email"},null,512),[[s.Jo,k.form.email]])]),(0,o.Lk)("div",i,[b,(0,o.bo)((0,o.Lk)("textarea",{"onUpdate:modelValue":a[2]||(a[2]=e=>k.form.message=e),class:"w-full p-2 border border-gray-300 rounded-lg",placeholder:"Your Message"},null,512),[[s.Jo,k.form.message]])]),p],32)])])}var k=t(4335),g={name:"ContactView",data(){return{form:{name:"",email:"",message:""}}},methods:{async saveContact(){try{const e=await k.A.post("http://localhost:3000/save-contact",this.form);console.log("Response:",e.data),alert("Contact saved successfully!"),this.form.name="",this.form.email="",this.form.message=""}catch(e){console.error("Error:",e),alert("Failed to save contact: "+e.message)}}}},h=t(6262);const y=(0,h.A)(g,[["render",f]]);var v=y}}]);
//# sourceMappingURL=497.f9b54630.js.map