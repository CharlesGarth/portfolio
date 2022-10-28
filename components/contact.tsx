import { FormEvent, useState } from 'react';
import { Card } from './card';
import Image from 'next/image';
import { Section } from './section';

export const Contact: Section = ({ setSection }) => {
    const [email, setEmail] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [showToast, setShowToast] = useState<boolean>();
    const [submitting, setSubmitting] = useState<boolean>();

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setSubmitting(true);
        try {
            await fetch('api/emailer', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            });
        } catch (error) {
            console.error(error);
        }

        setEmail('');
        setMessage('');
        (e.target as HTMLFormElement).reset();
        setShowToast(true);
        setSubmitting(false);
    };

    return (
        <Card
            id="contact"
            title="Contact"
            onEnter={() => setSection('contact')}
            centered
        >
            <form
                id="contact"
                className="flex flex-col justify-center items-center gap-2"
                onSubmit={submit}
            >
                <p className="prose dark:text-white">
                    Interested in working with me? Get in touch!
                </p>
                <div className="p-1 w-full md:w-1/2 rounded-lg bg-gradient-to-l from-red-500 to-blue-500">
                    <input
                        className="p-3 w-full rounded placeholder:text-gray-400 dark:bg-darkness"
                        type="email"
                        required={true}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="p-1 w-full md:w-1/2 rounded-lg bg-gradient-to-l from-red-500 to-blue-500">
                    <textarea
                        className={`p-3 w-full rounded dark:bg-darkness ${
                            message
                                ? 'text-black dark:text-white'
                                : 'text-gray-400'
                        }`}
                        form="contact"
                        defaultValue="Say hello!"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={(e) => (e.target.value = message || '')}
                    ></textarea>
                </div>
                <input
                    className="px-10 py-5 sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body font-medium tracking-wide text-white bg-gradient-to-tl from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 disabled:from-red-400 disabled:to-blue-400 hover:scale-[102%] transition-all rounded-full"
                    type="submit"
                    disabled={submitting}
                    value={submitting ? 'Sending' : 'Send'}
                />
                <div className="h-10">
                    {showToast && (
                        <span className="inline-block py-2">
                            Thanks! I can&apos;t wait to read it.{' '}
                            <Image
                                src="/assets/icons/tick.svg"
                                width={30}
                                height={20}
                                alt="a tick mark"
                            />
                        </span>
                    )}
                </div>
            </form>
        </Card>
    );
};
