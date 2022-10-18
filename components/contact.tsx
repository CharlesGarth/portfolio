import { FormEvent, useState } from 'react';
import { Card } from './card';
import Image from 'next/image';

export const Contact: React.FC = () => {
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
        <Card id="contact" title="Contact" centered>
            <form
                id="contact"
                className="flex flex-col justify-center items-center gap-2"
                onSubmit={submit}
            >
                <p className="prose">
                    Interested in working with me? Get in touch!
                </p>
                <div className="p-1 w-1/2 rounded-lg bg-gradient-to-r to-red-500 from-blue-500">
                    <input
                        className="p-3 w-full rounded placeholder:text-gray-400"
                        type="email"
                        required={true}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="p-1 w-1/2 rounded-lg bg-gradient-to-r to-red-500 from-blue-500">
                    <textarea
                        className={`p-3 w-full rounded ${
                            message ? 'text-black' : 'text-gray-400'
                        }`}
                        form="contact"
                        defaultValue="Say hello!"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={(e) => (e.target.value = message || '')}
                    ></textarea>
                </div>
                <input
                    className="px-4 py-2 sm:text-sm md:text-xl lg:text-2xl cursor-pointer font-body text-white bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-400 hover:to-blue-400 disabled:from-red-400 disabled:to-blue-400 rounded-lg"
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
