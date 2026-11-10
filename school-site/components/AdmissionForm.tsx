"use client";
import type { SyntheticEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {User, Phone, GraduationCap, MessageSquare, ChevronDown} from 'lucide-react';

type AdmissionFormProps = {
  phone: string;
  classOptions: { value: string; label: string }[];
  labels: {
    parentName: string;
    parentPhone: string;
    childName: string;
    classApplying: string;
    selectClass: string;
    messageLabel: string;
    submit: string;
    whatsappNote: string;
    privacyNote: string;
  };
};

export default function AdmissionForm({ phone, classOptions, labels }: AdmissionFormProps) {
  const inputClass = "w-full rounded-xl border border-primary/20 bg-surface pl-11 pr-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-primary";

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parentName = String(data.get('parentName') ?? '').trim();
    const parentPhone = String(data.get('parentPhone') ?? '').trim();
    const childName = String(data.get('childName') ?? '').trim();
    const classApplying = String(data.get('classApplying') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
       const lines = [
     'Admission enquiry',
     `Parent's name: ${parentName}`,
     `Phone: ${parentPhone}`,
     `Child's name: ${childName}`,
     `Class: ${classApplying}`,
   ];
    if (message) lines.push(`Message: ${message}`);
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className='space-y-4'>
        <div>
            <label htmlFor="parentName" className="font-semibold text-primary block">{labels.parentName}</label>
        <div className="relative mt-1">
            <User className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary/60" aria-hidden="true" />
            <input id="parentName" name="parentName" type="text" required autoComplete="name" maxLength={80} className={inputClass} />
        </div>
        </div>
        <div>
            <label htmlFor="parentPhone" className="font-semibold text-primary block">{labels.parentPhone}</label>
        <div className="relative mt-1">
       <Phone className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary/60" aria-hidden="true" />
            <input id="parentPhone" name="parentPhone" type="tel" inputMode="tel" required autoComplete="tel" minLength={10} maxLength={20} className={inputClass} />
        </div>
        </div>
        <div>
            <label htmlFor="childName" className="font-semibold text-primary block">{labels.childName}</label>
      <div className="relative mt-1">
       <User className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary/60" aria-hidden="true" />
            <input id="childName" name="childName" type="text" required autoComplete="off" maxLength={80} className={inputClass} />
        </div>
        </div>
        <div>
        <label htmlFor="classApplying" className="font-semibold text-primary block">{labels.classApplying}</label>
        <div className="relative mt-1">
       <GraduationCap className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-primary/60" aria-hidden="true" />
            <select id="classApplying" name="classApplying" required defaultValue="" className={`${inputClass} appearance-none pr-11`}>
            <option value="" disabled>{labels.selectClass}</option>
            {classOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          <ChevronDown className='pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-primary/60' aria-hidden="true"/>
        </div>
        </div>
        <div>
            <label htmlFor="message" className="font-semibold text-primary block">{labels.messageLabel}</label>
       <div className="relative mt-1">
       <MessageSquare className="pointer-events-none absolute left-4 top-3.5 size-5 text-primary/60" aria-hidden="true" />
        <textarea id="message" name="message" rows={3} maxLength={500} className={inputClass} />
        </div>
        </div>
        </div>
        <button type="submit" className='inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'><FaWhatsapp className='size-6' aria-hidden="true"/>{labels.submit}</button>
        <div className="space-y-1">
        <p className='text-sm text-text-muted'>{labels.whatsappNote}</p>
        <p className='text-sm text-text-muted'>{labels.privacyNote}</p> 
        </div>
   
    </form>
  );
}