"use client";

import { useState } from "react";

export default function ArJsonPage() {
    const [jsonData, setJsonData] = useState(null);
    const [copied, setCopied] = useState("");

    // Load JSON file
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                setJsonData(JSON.parse(event.target.result));
            } catch (err) {
                alert("Invalid JSON file");
            }
        };

        reader.readAsText(file);
    };

    // Copy text
    const copy = (text) => {
        navigator.clipboard.writeText(text.toString());
        setCopied(text);
        setTimeout(() => setCopied(""), 1000);
    };

    // Recursive renderer
    const RenderItem = ({ item, prefix = "" }) => {
        if (item === null) return null;

        // If primitive → show copy box
        if (typeof item !== "object") {
            return (
                <div
                    onClick={() => copy(item)}
                    className="border p-3 rounded-md mb-2 cursor-pointer hover:bg-gray-100"
                >
                    <span className="text-right block">{item}</span>
                    {copied === item && <p className="text-green-600 text-sm">Copied!</p>}
                </div>
            );
        }

        // If array → loop
        if (Array.isArray(item)) {
            return item.map((val, i) => (
                <div key={i} className="ml-4 border-l pl-4">
                    <RenderItem item={val} prefix={`${prefix}[${i}]`} />
                </div>
            ));
        }

        // If object → render fields
        return Object.entries(item).map(([key, value]) => (
            <div key={key} className="mb-3">
                <p className="font-bold">{prefix + key}</p>
                <div className="ml-4 border-l pl-4">
                    <RenderItem item={value} prefix={prefix + key + "."} />
                </div>
            </div>
        ));
    };

    return (
        <div className="p-10 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Arabic JSON Viewer + Copy</h1>

            <input
                type="file"
                accept="application/json"
                onChange={handleUpload}
                className="mb-6"
            />

            {!jsonData && <p>Upload your Arabic JSON to begin.</p>}

            {jsonData && (
                <div className="mt-6">
                    <RenderItem item={jsonData} />
                </div>
            )}
        </div>
    );
}
